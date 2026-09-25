import { Router, Request, type Response } from "express";
import { animaisService } from "../services/animais.service";
import { Animal } from "../types/animal";

export const animaisRouter = Router()

animaisRouter.get("/", async (_request: Request, response: Response) => {
    try {
        const res = await animaisService.getAll()

        response.json(res)
    } catch (error) {

    }

})

animaisRouter.get("/:id", async (request: Request<{id: Animal}>, response: Response) => {
    try {
        const id = request.params.id

        if (!String(id)) {
            return response.status(400).json({
                message: "ID inválido",
            });
        }

        const animal = await animaisService.getById(id);

        return response.json(animal);
    } catch (error) {
        console.error(error);

        return response.status(404).json({
            message: "Cliente não encontrado",
        });
    }
});
