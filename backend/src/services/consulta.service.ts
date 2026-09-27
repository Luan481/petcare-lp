import { pool } from "../database/connection";
import { Consulta, CriarConsulta, EditarConsulta } from "../types/consulta";

class ConsultaService {
    async getAll(): Promise<Consulta[]> {
        try {
            const res = await pool.query<Consulta>("SELECT * FROM consulta");
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar consulta:", error);
            throw error;
        }
    }

    async getById(id: string): Promise<Consulta> {
        try {
            const res = await pool.query<Consulta>(
                "SELECT * FROM consulta WHERE id = $1",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao buscar consulta por ID:", error);
            throw error;
        }
    }

    async create(dados: CriarConsulta): Promise<Consulta> {
        try {
            const res = await pool.query<Consulta>(
                `INSERT INTO consulta (data, id_animal, id_medico, id_servico)
                 VALUES ($1, $2, $3, $4)
                 RETURNING *`,
                [dados.data, dados.id_animal, dados.id_medico, dados.id_servico]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("O banco não retornou o registro cadastrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao criar consulta:", error);
            throw error;
        }
    }

    async editar(id: string, dados: EditarConsulta): Promise<Consulta> {
        try {
            const res = await pool.query<Consulta>(
                `UPDATE consulta
                 SET data = $1, id_animal = $2, id_medico = $3, id_servico = $4
                 WHERE id = $5
                 RETURNING *`,
                [dados.data, dados.id_animal, dados.id_medico, dados.id_servico, id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao editar consulta:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<Consulta> {
        try {
            const res = await pool.query<Consulta>(
                "DELETE FROM consulta WHERE id = $1 RETURNING *",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao excluir consulta:", error);
            throw error;
        }
    }
}

export const consultaService = new ConsultaService();

