import { Request, Response, Router } from "express"
import { funcionarioService } from "../services/funcionario.service"
import { CriarFuncionario } from "../types/funcionario"

export const funcionarioRouter = Router()

funcionarioRouter.get("/", async (_request: Request, response: Response) => {
    try {
        const res = await funcionarioService.getAll()

        return response.json(res)
    } catch (error) {
        console.error(error)

        return response.status(500).json({
            error: "Erro Interno"
        })
    }

})

funcionarioRouter.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const id = request.params.id

        if (!id) {
            return response.status(400).json({
                message: "ID inválido",
            });
        }

        const cliente = await funcionarioService.getById(id);

        return response.json(cliente);
    } catch (error) {
        console.error(error);

        return response.status(404).json({
            message: "Funcionário não encontrado",
        });
    }
});

funcionarioRouter.post("/", async (_request: Request<{}, {}, CriarFuncionario>, response: Response,) => {
    try {
        const dados = _request.body;


        const cliente = await funcionarioService.create(dados)

        return response.status(201).json(cliente);
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            message: "Erro ao criar funcionário",
        });
    }
})

funcionarioRouter.patch("/inativar/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const id = String(request.params.id);

        if (!String(id)) {
            return response.status(400).json({
                message: "ID inválido",
            });
        }

        const cliente = await funcionarioService.inativar(id);

        return response.json(cliente);
    } catch (error) {
        console.error(error);

        return response.status(404).json({
            message: "Funcionário não encontrado",
        });
    }
});