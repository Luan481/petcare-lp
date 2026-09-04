import { Router, Request, type Response } from "express";
import { clienteService } from "../services/cliente.service";
import { CriarCliente } from "../types/cliente";

export const clientesRouter = Router()



clientesRouter.get("/", async (_request: Request, response: Response) => {
    try {
        const res = await clienteService.getAll()

        response.json(res)
    } catch (error) {

    }

})

clientesRouter.post("/", async (_request: Request< {}, {},CriarCliente>, response: Response, ) => {
    try {
        const { nome, telefone, idade, email } = _request.body;

        if(!email){
            response.json("Valor inválido")
        }

        const cliente = await clienteService.create(
            nome,
            telefone,
            idade,
            email
        );

        return response.status(201).json(cliente);
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            message: "Erro ao criar cliente",
        });
    }
})
