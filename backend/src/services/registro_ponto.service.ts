import { pool } from "../database/connection";
import { RegistroPonto, CriarRegistroPonto, EditarRegistroPonto } from "../types/registro_ponto";

class RegistroPontoService {
    async getAll(): Promise<RegistroPonto[]> {
        try {
            const res = await pool.query<RegistroPonto>("SELECT * FROM registro_ponto");
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar registro_ponto:", error);
            throw error;
        }
    }

    async getById(id: string): Promise<RegistroPonto> {
        try {
            const res = await pool.query<RegistroPonto>(
                "SELECT * FROM registro_ponto WHERE id = $1",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao buscar registro_ponto por ID:", error);
            throw error;
        }
    }

    async create(dados: CriarRegistroPonto): Promise<RegistroPonto> {
        try {
            const res = await pool.query<RegistroPonto>(
                `INSERT INTO registro_ponto (data, id_funcionario)
                 VALUES (COALESCE($1, CURRENT_TIMESTAMP), $2)
                 RETURNING *`,
                [dados.data, dados.id_funcionario]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("O banco não retornou o registro cadastrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao criar registro_ponto:", error);
            throw error;
        }
    }

    async editar(id: string, dados: EditarRegistroPonto): Promise<RegistroPonto> {
        try {
            const res = await pool.query<RegistroPonto>(
                `UPDATE registro_ponto
                 SET data = COALESCE($1, CURRENT_TIMESTAMP), id_funcionario = $2
                 WHERE id = $3
                 RETURNING *`,
                [dados.data, dados.id_funcionario, id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao editar registro_ponto:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<RegistroPonto> {
        try {
            const res = await pool.query<RegistroPonto>(
                "DELETE FROM registro_ponto WHERE id = $1 RETURNING *",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao excluir registro_ponto:", error);
            throw error;
        }
    }
}

export const registroPontoService = new RegistroPontoService();

