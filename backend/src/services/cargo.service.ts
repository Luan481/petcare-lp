import { pool } from "../database/connection";
import { Cargo, CriarCargo } from "../types/cargo";

class CargoService {
    async getAll(): Promise<Cargo[]> {
        try {
            const res = await pool.query<Cargo>("SELECT * FROM cargo");
            console.log(res.rows)
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar cargo:", error);
            throw new Error("Erro no banco de dados");
        }
    }
    async getById(dados: Cargo) {
        try {

            const id = dados.id

            const res = await pool.query(
                "SELECT * FROM cargo WHERE id = $1 RETURNG *",
                [id]
            );

            const animal = res.rows[0];

            if (!animal) {
                throw new Error("Cargo não encontrado");
            }

            return animal;
        } catch (error) {
            console.error("Erro ao buscar cargo por ID:", error);
            throw new Error("Erro no banco de dados");
        }
    }

    async create(dados: CriarCargo): Promise<Cargo> {
        try {
            const res = await pool.query<Cargo>(
                `INSERT INTO cargo (nome)
                     VALUES ($1)
                     RETURNING *`,
                [dados.nome]
            );

            const cliente = res.rows[0];
            if (!cliente) {
                throw new Error("O banco não retornou cliente cadastrado")
            }

            return cliente

        } catch (error) {
            console.error("Erro ao criar cliente:", error);
            throw new Error("Erro no banco de dados");
        }
    }
}

export const cargoService = new CargoService