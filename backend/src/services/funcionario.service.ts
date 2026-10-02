import { pool } from '../database/connection.js';
import { FuncionarioProps } from '../types/funcionario.js';
import bcrypt from 'bcrypt'
import 'dotenv/config'

const saltRounds = Number(process.env.BCRYPT_SALTS)

class FuncionarioService {
  
  async create(data: FuncionarioProps) {

    
    if(!saltRounds){
      throw new Error('Configuração bcrypt mal feita')
    }

    const senhaHash = await bcrypt.hash(data.senha, saltRounds);

    const query = `
      INSERT INTO funcionario (nome, email, id_cargo ,senha)
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    const values = [data.nome, data.email, data.idCargo,senhaHash];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async getAll() {
    const query = "SELECT * FROM funcionario";
    const result = await pool.query(query);
    return result.rows;
  }

  // async inativar(id: string) {
  //   const query = `
  //     UPDATE funcionario
  //     SET deleted_at = NOW() 
  //     WHERE id = $1 
  //     RETURNING *;
  //   `;
  //   const result = await pool.query(query, [id]);
  //   return result.rows[0];
  // }

    async getById(id: string) {
    const query = `
      SELECT * FROM funcionario where id = $1
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}

export const funcionarioService = new FuncionarioService