import { pool } from "../database/connection.js";

class AnimaisService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM animais");
            console.log(res.rows)
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar animais:", error);
            throw new Error("Erro no banco de dados");
        }
    }
    async getById(id: string) {
        try {
            const res = await pool.query(
                "SELECT * FROM animais WHERE id = $1",
                [id]
            );

            const animal = res.rows[0];

            if (!animal) {
                throw new Error("Animal não encontrado");
            }

            return animal;
        } catch (error) {
            console.error("Erro ao buscar animal por ID:", error);
            throw new Error("Erro no banco de dados");
        }
    }
}


export const animaisService = new AnimaisService();