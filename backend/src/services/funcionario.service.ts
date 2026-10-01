import { pool } from '../database/connection.js';
import { FuncionarioProps } from '../types/funcionario.js';
import bcrypt from 'bcrypt'
 

class FuncionarioService {
  
  async create(data: FuncionarioProps) {

    const senhaHash = await bcrypt.hash(data.senha,10);

    const query = `
      INSERT INTO funcionario (nome, email, telefone, cargo_id ,senha)
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *;
    `;
    const values = [data.nome, data.email, data.telefone, data.cargo_id,senhaHash];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async getAll() {
    const query = "SELECT * FROM funcionario WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: string) {
    const query = `
      UPDATE funcionario
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}

export const funcionarioService = new FuncionarioService