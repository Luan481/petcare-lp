import { promises } from "node:dns";
import { pool } from "../database/connection.js";
import { Cliente, CriarCliente } from "../types/cliente.js";
import { error } from "node:console";

class ClienteService {
    async create(dados: CriarCliente): Promise<Cliente> {
        try {
            const res = await pool.query<Cliente>(
                `INSERT INTO clientes (nome, telefone, idade, email)
                 VALUES ($1, $2, $3, $4)
                 RETURNING *`,
                [dados.nome, dados.telefone, dados.idade, dados.email]
            );

            const cliente = res.rows[0];
            if (!cliente) {
                throw new Error("O banco não retornou cliente cadastrado")
            }

            return cliente

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
    async getById(id: string): Promise<Cliente> {
        try {
            const res = await pool.query<Cliente>(
                "SELECT * FROM clientes WHERE id = $1 RETURNG *",
                [id]
            );

            const cliente = res.rows[0];

            if (!cliente) {
                throw new Error("Cliente não encontrado");
            }

            return cliente;
        } catch (error) {
            console.error("Erro ao buscar cliente por ID:", error);
            throw new Error("Erro no banco de dados");
        }
    }

    async inativar(id: string): Promise<Cliente[]> {
        try {
            const res = await pool.query<Cliente>(
                "UPDATE clientes SET status = 'inativo' WHERE id = $1", [id]
            )

            const cliente = res.rows

            return cliente
        }
        catch (error) {
            console.error("Erro ao inativar cliente por ID:", error);
            throw new Error("Erro no banco de dados");
        }
    }
}


export const clienteService = new ClienteService();