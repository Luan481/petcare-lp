import { Request, Response, Router } from "express";
import { cargoService } from "../services/cargo.service";
import { Cargo, CriarCargo } from "../types/cargo";

export const cargoRouter = Router()

cargoRouter.get("/", async (_request: Request, response: Response) => {
    try {
        const res = await cargoService.getAll()

        response.json(res)
    } catch (error) {

    }

})

cargoRouter.post("/", async (_request: Request<{}, {}, CriarCargo>, response: Response,) => {
    try {
        const dados = _request.body;


        const cliente = await cargoService.create(dados)

        return response.status(201).json(cliente);
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            message: "Erro ao criar cliente",
        });
    }
})

cargoRouter.get("/:id", async (request: Request<{id: Cargo}>, response: Response) => {
    try {
        const id = request.params.id

        if (!String(id)) {
            return response.status(400).json({
                message: "ID inválido",
            });
        }

        const cargo = await cargoService.getById(id);

        return response.json(cargo);
    } catch (error) {
        console.error(error);

        return response.status(404).json({
            message: "Cargo não encontrado",
        });
    }
});
