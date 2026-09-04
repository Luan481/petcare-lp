import { promises } from "node:dns";
import { pool } from "../database/connection.js";
import { Cliente } from "../types/cliente.js";

class ClienteService {
    async create(nome: string, telefone: string, idade: number, email: string): Promise <Cliente> {
        try {
            const res = await pool.query<Cliente>(
                `INSERT INTO clientes (nome, telefone, idade, email)
                 VALUES ($1, $2, $3, $4)
                 RETURNING *`,
                [nome, telefone, idade, email]
            );

            return res.rows[0];
        } catch (error) {
            console.error("Erro ao criar cliente:", error);
            throw new Error("Erro no banco de dados");
        }
    }

    async getAll(): Promise<Cliente[]> {
        try {
            const res = await pool.query<Cliente>("SELECT * FROM clientes");
            console.log(res.rows)
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar clientes:", error);
            throw new Error("Erro no banco de dados");
        }
    }
}


export const clienteService = new ClienteService();