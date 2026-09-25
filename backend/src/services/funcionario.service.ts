import { pool } from "../database/connection"
import { CriarFuncionario, EditarFuncionario, Funcionario } from "../types/funcionario"

class FuncionarioService {
    async getAll(): Promise<Funcionario[]> {
        try {
            const res = await pool.query<Funcionario>(`SELECT * FROM funcionario`)

            return res.rows
        }
        catch (error) {
            console.error('Erro ao visualizar funcionários')
            throw new Error('Erro no banco de dados')
        }
    }

    async getById(id: Funcionario['id']): Promise<Funcionario> {
        try {
            const res = await pool.query<Funcionario>(
                "SELECT * FROM funcionario WHERE id = $1 RETURNG *",
                [id]
            );

            const funcionario = res.rows[0];

            if (!funcionario) {
                throw new Error("Funcionario não encontrado");
            }

            return funcionario;
        } catch (error) {
            console.error("Erro ao buscar funcionario por ID:", error);
            throw new Error("Erro no banco de dados");
        }
    }


    async create(dados: CriarFuncionario) {
        try {
            const res = await pool.query<Funcionario>(`INSERT INTO funcionario(nome, email, senha, id_cargo)
                VALUES($1,$2,$3,(SELECT id FROM cargo WHERE nome = $4)) RETURNING *`, [dados.nome, dados.email, dados.senha, dados.id_cargo])
            const funcionario = res.rows[0]

            if (!funcionario) {
                throw new Error("O banco não retornou funcionário cadastrado")
            }

            return funcionario
        }
        catch (error) {
            console.error('Erro ao cadastrar funcionário', error)
            throw new Error('erro no banco de dados')
        }
    }


    async editar(dados: EditarFuncionario): Promise<Funcionario> {
        try {
            const res = await pool.query<Funcionario>(`UPDATE funcionario SET nome = $1, email = $2, senha = $3, id_cargo = $4, ativo = $5 WHERE id = $6 RETURNING *`, [dados.Novonome, dados.Novoemail, dados.Novosenha, dados.Novoid_cargo, dados.ativo, dados.id])

            const funcionario = res.rows[0]

            return funcionario
        }
        catch (error) {
            console.error('Erro ao editar funcionário', error)
            throw new Error('Erro no banco de dados')
        }
    }


    async inativar(dados: Funcionario["id"]): Promise<Funcionario> {
        try {
            const res = await pool.query<Funcionario>(`UPDATE funcionario SET ativo = false WHERE id = $1`, [dados])

            return res.rows[0]
        }

        catch (error) {
            console.error('Erro ao inativar funcionário', error)
            throw new Error('Erro no banco de dados')
        }
    }

}

export const funcionarioService = new FuncionarioService