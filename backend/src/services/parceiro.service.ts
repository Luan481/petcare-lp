import { pool } from "../database/connection";
import { Parceiro, CriarParceiro, EditarParceiro } from "../types/parceiro";

class ParceiroService {
    async getAll(): Promise<Parceiro[]> {
        try {
            const res = await pool.query<Parceiro>("SELECT * FROM parceiro");
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar parceiro:", error);
            throw error;
        }
    }

    async getById(id: string): Promise<Parceiro> {
        try {
            const res = await pool.query<Parceiro>(
                "SELECT * FROM parceiro WHERE id = $1",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao buscar parceiro por ID:", error);
            throw error;
        }
    }

    async create(dados: CriarParceiro): Promise<Parceiro> {
        try {
            const res = await pool.query<Parceiro>(
                `INSERT INTO parceiro (nome)
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
            console.error("Erro ao criar parceiro:", error);
            throw error;
        }
    }

    async editar(id: string, dados: EditarParceiro): Promise<Parceiro> {
        try {
            const res = await pool.query<Parceiro>(
                `UPDATE parceiro
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
            console.error("Erro ao editar parceiro:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<Parceiro> {
        try {
            const res = await pool.query<Parceiro>(
                "DELETE FROM parceiro WHERE id = $1 RETURNING *",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao excluir parceiro:", error);
            throw error;
        }
    }
}

export const parceiroService = new ParceiroService();

