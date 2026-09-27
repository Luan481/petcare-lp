import { pool } from "../database/connection";
import { PetDono, CriarPetDono, EditarPetDono } from "../types/pet_dono";

class PetDonoService {
    async getAll(): Promise<PetDono[]> {
        try {
            const res = await pool.query<PetDono>("SELECT * FROM pet_dono");
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar pet_dono:", error);
            throw error;
        }
    }

    async getById(id: string): Promise<PetDono> {
        try {
            const res = await pool.query<PetDono>(
                "SELECT * FROM pet_dono WHERE id = $1",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao buscar pet_dono por ID:", error);
            throw error;
        }
    }

    async create(dados: CriarPetDono): Promise<PetDono> {
        try {
            const res = await pool.query<PetDono>(
                `INSERT INTO pet_dono (id_animal, id_cliente)
                 VALUES ($1, $2)
                 RETURNING *`,
                [dados.id_animal, dados.id_cliente]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("O banco não retornou o registro cadastrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao criar pet_dono:", error);
            throw error;
        }
    }

    async editar(id: string, dados: EditarPetDono): Promise<PetDono> {
        try {
            const res = await pool.query<PetDono>(
                `UPDATE pet_dono
                 SET id_animal = $1, id_cliente = $2
                 WHERE id = $3
                 RETURNING *`,
                [dados.id_animal, dados.id_cliente, id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao editar pet_dono:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<PetDono> {
        try {
            const res = await pool.query<PetDono>(
                "DELETE FROM pet_dono WHERE id = $1 RETURNING *",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao excluir pet_dono:", error);
            throw error;
        }
    }
}

export const petDonoService = new PetDonoService();

