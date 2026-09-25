import { Router, Request, type Response } from "express";
import { estoqueService } from "../services/estoque.service";
import { CriarEstoque, Estoque } from "../types/estoque";


export const estoqueRouter = Router()



estoqueRouter.get("/", async (_request: Request, response: Response) => {
    try {
        const res = await estoqueService.getAll()

        return response.json(res)
    } catch (error) {
        console.error(error)

        return response.status(500).json({
            error: "Erro Interno"
        })
    }

})

estoqueRouter.get("/:id", async (request: Request<{ id: String }>, response: Response) => {
    try {
        const id = request.params.id;

        if (id) {
            return response.status(400).json({
                message: "ID inválido",
            });
        }

        const estoque = await estoqueService.getById(id);

        return response.json(estoque);
    } catch (error) {
        console.error(error);

        return response.status(404).json({
            message: "Estoque não encontrado",
        });
    }
});

estoqueRouter.post("/", async (_request: Request<{}, {}, CriarEstoque>, response: Response,) => {
    try {
        const dados = _request.body;


        const estoque = await estoqueService.create(dados)

        return response.status(201).json(estoque);
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            message: "Erro ao criar estoque",
        });
    }
})