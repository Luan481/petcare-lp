import { pool } from "../database/connection"
import { CriarEstoque, Estoque } from "../types/estoque"

class EstoqueService {
    async getAll(): Promise<Estoque[]> {
        try {
            const res = await pool.query<Estoque>(`SELECT * FROM estoque`)

            return res.rows
        }
        catch (error) {
            console.error('Erro ao visualizar estoque', error)
            throw new Error('Erro no banco de dados')
        }
    }
    async getById(dados: Estoque) {
        try {

            const id = dados.id

            const res = await pool.query(
                "SELECT * FROM estoque WHERE id = $1 RETURNG *",
                [id]
            );

            const animal = res.rows[0];

            if (!animal) {
                throw new Error("Estoque não encontrado");
            }

            return animal;
        } catch (error) {
            console.error("Erro ao buscar estoque por ID:", error);
            throw new Error("Erro no banco de dados");
        }
    }

    async create(dados: CriarEstoque): Promise<Estoque> {
        try {
            const res = await pool.query<Estoque>(`INSERT INTO estoque(nome, descricao, quantidade, valor, dt_validade) VALUES($1,$2,$3,$4,$5) RETURNING *`, [dados.nome, dados.descricao, dados.quantidade, dados.valor, dados.dt_validade])

            const estoque = res.rows[0]

            if (!estoque) {
                throw new Error('O banco não retornou nenhum estoque')
            }

            return estoque
        }
        catch (error) {
            console.error('Erro ao criar estoque', error)
            throw new Error('Erro no banco de dados')
        }
    }
}

export const estoqueService = new EstoqueService