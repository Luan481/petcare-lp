import { Router, Request, type Response } from "express";
import { animaisService } from "../services/animais.service";
 
export const animaisRouter = Router()

animaisRouter.get("/", async (_request: Request, response: Response) => {
    try{
        const res = await animaisService.getAll()

        response.json(res)
    } catch (error) {

    }

})
