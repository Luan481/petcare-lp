import { pool } from "../database/connection";
import { Servico, CriarServico, EditarServico } from "../types/servico";

class ServicoService {
    async getAll(): Promise<Servico[]> {
        try {
            const res = await pool.query<Servico>("SELECT * FROM servico");
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar servico:", error);
            throw error;
        }
    }

    async getById(id: string): Promise<Servico> {
        try {
            const res = await pool.query<Servico>(
                "SELECT * FROM servico WHERE id = $1",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao buscar servico por ID:", error);
            throw error;
        }
    }

    async create(dados: CriarServico): Promise<Servico> {
        try {
            const res = await pool.query<Servico>(
                `INSERT INTO servico (nome)
                 VALUES ($1)
                 RETURNING *`,
                [dados.nome]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("O banco não retornou o registro cadastrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao criar servico:", error);
            throw error;
        }
    }

    async editar(id: string, dados: EditarServico): Promise<Servico> {
        try {
            const res = await pool.query<Servico>(
                `UPDATE servico
                 SET nome = $1
                 WHERE id = $2
                 RETURNING *`,
                [dados.nome, id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao editar servico:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<Servico> {
        try {
            const res = await pool.query<Servico>(
                "DELETE FROM servico WHERE id = $1 RETURNING *",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao excluir servico:", error);
            throw error;
        }
    }
}

export const servicoService = new ServicoService();

