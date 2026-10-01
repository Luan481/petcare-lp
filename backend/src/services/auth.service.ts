import {pool} from '../database/connection.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthService {
    async login(email: string , senhaLimpa: string){
        const query = 'SELECT * FROM funcionario WHERE email = $1 AND delected_at IS NULL ';
        const result = await pool.query(query,[email]);
        const funcionario = result.rows[0];

        if (!funcionario){
            throw new Error ('E-mail ou senha incorretos.');
        }
        const senhaValida = await bcrypt.compare(senhaLimpa,funcionario.senha);
        if (!senhaValida){
            throw new Error ('E-mail ou senha incorretos.');
        }
const secret = process.env.JWT_SECRET || 'super-chave-secreta-petcare';

const token = jwt.sign(
  { id: funcionario.id, id_cargo: funcionario.id_cargo },
  secret,
  { expiresIn: '8h' }
);

delete funcionario.senha;

return {
  usuario: funcionario,
  token
};
    }
}