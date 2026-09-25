import { pool } from "../database/connection.js";
import { Animal, CriarAnimal } from "../types/animal.js";

class AnimaisService {
    async getAll(): Promise<Animal[]>{
        try {
            const res = await pool.query<Animal>("SELECT * FROM animal");
            console.log(res.rows)
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar animais:", error);
            throw new Error("Erro no banco de dados");
        }
    }
    async getById(dados: Animal) {
        try {

            const id = dados.id

            const res = await pool.query(
                "SELECT * FROM animal WHERE id = $1 RETURNG *",
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