import { pool } from "../database/connection";
import { Frota, CriarFrota, EditarFrota } from "../types/frota";

class FrotaService {
    async getAll(): Promise<Frota[]> {
        try {
            const res = await pool.query<Frota>("SELECT * FROM frota");
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar frota:", error);
            throw error;
        }
    }

    async getById(id: string): Promise<Frota> {
        try {
            const res = await pool.query<Frota>(
                "SELECT * FROM frota WHERE id = $1",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao buscar frota por ID:", error);
            throw error;
        }
    }

    async create(dados: CriarFrota): Promise<Frota> {
        try {
            const res = await pool.query<Frota>(
                `INSERT INTO frota (marca, modelo)
                 VALUES ($1, $2)
                 RETURNING *`,
                [dados.marca, dados.modelo]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("O banco não retornou o registro cadastrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao criar frota:", error);
            throw error;
        }
    }

    async editar(id: string, dados: EditarFrota): Promise<Frota> {
        try {
            const res = await pool.query<Frota>(
                `UPDATE frota
                 SET marca = $1, modelo = $2
                 WHERE id = $3
                 RETURNING *`,
                [dados.marca, dados.modelo, id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao editar frota:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<Frota> {
        try {
            const res = await pool.query<Frota>(
                "DELETE FROM frota WHERE id = $1 RETURNING *",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao excluir frota:", error);
            throw error;
        }
    }
}

export const frotaService = new FrotaService();

