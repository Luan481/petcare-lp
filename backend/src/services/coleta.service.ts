import { pool } from "../database/connection";
import { Coleta, CriarColeta, EditarColeta } from "../types/coleta";

class ColetaService {
    async getAll(): Promise<Coleta[]> {
        try {
            const res = await pool.query<Coleta>("SELECT * FROM coleta");
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar coleta:", error);
            throw error;
        }
    }

    async getById(id: string): Promise<Coleta> {
        try {
            const res = await pool.query<Coleta>(
                "SELECT * FROM coleta WHERE id = $1",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao buscar coleta por ID:", error);
            throw error;
        }
    }

    async create(dados: CriarColeta): Promise<Coleta> {
        try {
            const res = await pool.query<Coleta>(
                `INSERT INTO coleta (dt_coleta, endereco, id_cliente, id_animal)
                 VALUES ($1, $2, $3, $4)
                 RETURNING *`,
                [dados.dt_coleta, dados.endereco, dados.id_cliente, dados.id_animal]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("O banco não retornou o registro cadastrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao criar coleta:", error);
            throw error;
        }
    }

    async editar(id: string, dados: EditarColeta): Promise<Coleta> {
        try {
            const res = await pool.query<Coleta>(
                `UPDATE coleta
                 SET dt_coleta = $1, endereco = $2, id_cliente = $3, id_animal = $4
                 WHERE id = $5
                 RETURNING *`,
                [dados.dt_coleta, dados.endereco, dados.id_cliente, dados.id_animal, id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao editar coleta:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<Coleta> {
        try {
            const res = await pool.query<Coleta>(
                "DELETE FROM coleta WHERE id = $1 RETURNING *",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao excluir coleta:", error);
            throw error;
        }
    }
}

export const coletaService = new ColetaService();

