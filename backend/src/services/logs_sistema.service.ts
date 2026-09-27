import { pool } from "../database/connection";
import { LogsSistema, CriarLogsSistema, EditarLogsSistema } from "../types/logs_sistema";

class LogsSistemaService {
    async getAll(): Promise<LogsSistema[]> {
        try {
            const res = await pool.query<LogsSistema>("SELECT * FROM logs_sistema");
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar logs_sistema:", error);
            throw error;
        }
    }

    async getById(id: string): Promise<LogsSistema> {
        try {
            const res = await pool.query<LogsSistema>(
                "SELECT * FROM logs_sistema WHERE id = $1",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao buscar logs_sistema por ID:", error);
            throw error;
        }
    }

    async create(dados: CriarLogsSistema): Promise<LogsSistema> {
        try {
            const res = await pool.query<LogsSistema>(
                `INSERT INTO logs_sistema (op_realizada, descricao, data, id_funcionario)
                 VALUES ($1, $2, COALESCE($3, CURRENT_TIMESTAMP), $4)
                 RETURNING *`,
                [dados.op_realizada, dados.descricao, dados.data, dados.id_funcionario]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("O banco não retornou o registro cadastrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao criar logs_sistema:", error);
            throw error;
        }
    }

    async editar(id: string, dados: EditarLogsSistema): Promise<LogsSistema> {
        try {
            const res = await pool.query<LogsSistema>(
                `UPDATE logs_sistema
                 SET op_realizada = $1, descricao = $2, data = COALESCE($3, CURRENT_TIMESTAMP), id_funcionario = $4
                 WHERE id = $5
                 RETURNING *`,
                [dados.op_realizada, dados.descricao, dados.data, dados.id_funcionario, id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao editar logs_sistema:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<LogsSistema> {
        try {
            const res = await pool.query<LogsSistema>(
                "DELETE FROM logs_sistema WHERE id = $1 RETURNING *",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao excluir logs_sistema:", error);
            throw error;
        }
    }
}

export const logsSistemaService = new LogsSistemaService();

