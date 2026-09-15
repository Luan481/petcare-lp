import { Router, Request, type Response } from "express";
import { animaisService } from "../services/animais.service";

export const animaisRouter = Router()

animaisRouter.get("/", async (_request: Request, response: Response) => {
    try {
        const res = await animaisService.getAll()

        response.json(res)
    } catch (error) {

    }

})

animaisRouter.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const id = String(request.params.id);

        if (!String(id)) {
            return response.status(400).json({
                message: "ID inválido",
            });
        }

        const cliente = await animaisService.getById(id);

        return response.json(cliente);
    } catch (error) {
        console.error(error);

        return response.status(404).json({
            message: "Cliente não encontrado",
        });
    }
});
