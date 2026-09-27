import { pool } from "../database/connection";
import { Venda, CriarVenda, EditarVenda } from "../types/venda";

class VendaService {
    async getAll(): Promise<Venda[]> {
        try {
            const res = await pool.query<Venda>("SELECT * FROM venda");
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar venda:", error);
            throw error;
        }
    }

    async getById(id: string): Promise<Venda> {
        try {
            const res = await pool.query<Venda>(
                "SELECT * FROM venda WHERE id = $1",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao buscar venda por ID:", error);
            throw error;
        }
    }

    async create(dados: CriarVenda): Promise<Venda> {
        try {
            const res = await pool.query<Venda>(
                `INSERT INTO venda (id_item, id_funcionario, id_cliente, data)
                 VALUES ($1, $2, $3, COALESCE($4, CURRENT_TIMESTAMP))
                 RETURNING *`,
                [dados.id_item, dados.id_funcionario, dados.id_cliente, dados.data]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("O banco não retornou o registro cadastrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao criar venda:", error);
            throw error;
        }
    }

    async editar(id: string, dados: EditarVenda): Promise<Venda> {
        try {
            const res = await pool.query<Venda>(
                `UPDATE venda
                 SET id_item = $1, id_funcionario = $2, id_cliente = $3, data = COALESCE($4, CURRENT_TIMESTAMP)
                 WHERE id = $5
                 RETURNING *`,
                [dados.id_item, dados.id_funcionario, dados.id_cliente, dados.data, id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao editar venda:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<Venda> {
        try {
            const res = await pool.query<Venda>(
                "DELETE FROM venda WHERE id = $1 RETURNING *",
                [id]
            );

            const registro = res.rows[0];
            if (!registro) {
                throw new Error("Registro não encontrado");
            }

            return registro;
        } catch (error) {
            console.error("Erro ao excluir venda:", error);
            throw error;
        }
    }
}

export const vendaService = new VendaService();

