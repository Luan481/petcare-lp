import { Router, Request, type Response } from "express";
import { clienteService } from "../services/cliente.service";
import { CriarCliente } from "../types/cliente";

export const clientesRouter = Router()



clientesRouter.get("/", async (_request: Request, response: Response) => {
    try {
        const res = await clienteService.getAll()

        return response.json(res)
    } catch (error) {
        console.error(error)

        return response.status(500).json({
            error: "Erro Interno"
        })
    }

})

clientesRouter.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const id = String(request.params.id);

        if (!String(id)) {
            return response.status(400).json({
                message: "ID inválido",
            });
        }

        const cliente = await clienteService.getById(id);

        return response.json(cliente);
    } catch (error) {
        console.error(error);

        return response.status(404).json({
            message: "Cliente não encontrado",
        });
    }
});

clientesRouter.post("/", async (_request: Request<{}, {}, CriarCliente>, response: Response,) => {
    try {
        const dados = _request.body;


        const cliente = await clienteService.create(dados)

        return response.status(201).json(cliente);
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            message: "Erro ao criar cliente",
        });
    }
})
