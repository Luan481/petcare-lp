import { pool } from "../database/connection";
import { Aumigo, CriarAumigo, EditarAumigo } from "../types/aumigo";

class AumigoService {
    async getAll(): Promise<Aumigo[]> {
        try {
            const res = await pool.query<Aumigo>("SELECT * FROM aumigo");
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar aumigo:", error);
            throw error;
        }
    }

    async getById(id: string): Promise<Aumigo> {
        try {
            const res = await pool.query<Aumigo>(
                "SELECT * FROM aumigo WHERE id = $1",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao buscar aumigo por ID:", error);
            throw error;
        }
    }

    async create(dados: CriarAumigo): Promise<Aumigo> {
        try {
            const res = await pool.query<Aumigo>(
                `INSERT INTO aumigo (dt_inicio, dt_fim, status, id_parceiro)
                 VALUES (COALESCE($1, CURRENT_DATE), $2, COALESCE($3, TRUE), $4)
                 RETURNING *`,
                [dados.dt_inicio, dados.dt_fim, dados.status, dados.id_parceiro]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("O banco não retornou o registro cadastrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao criar aumigo:", error);
            throw error;
        }
    }

    async editar(id: string, dados: EditarAumigo): Promise<Aumigo> {
        try {
            const res = await pool.query<Aumigo>(
                `UPDATE aumigo
                 SET dt_inicio = COALESCE($1, CURRENT_DATE), dt_fim = $2, status = COALESCE($3, TRUE), id_parceiro = $4
                 WHERE id = $5
                 RETURNING *`,
                [dados.dt_inicio, dados.dt_fim, dados.status, dados.id_parceiro, id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao editar aumigo:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<Aumigo> {
        try {
            const res = await pool.query<Aumigo>(
                "DELETE FROM aumigo WHERE id = $1 RETURNING *",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao excluir aumigo:", error);
            throw error;
        }
    }
}

export const aumigoService = new AumigoService();

