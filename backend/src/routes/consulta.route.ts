import { Request, Response, Router } from "express";
import { consultaService } from "../services/consulta.service";
import { CriarConsulta, EditarConsulta } from "../types/consulta";

export const consultaRouter = Router();

consultaRouter.get("/", async (_request: Request, response: Response) => {
    try {
        const registros = await consultaService.getAll();
        return response.json(registros);
    } catch (error) {
        console.error(error);
        if (error && typeof error === "object" && "code" in error) {
            if (error.code === "23503" || error.code === "23505") {
                return response.status(409).json({ message: "Registro duplicado ou relacionamento inválido" });
            }
            if (["23502", "23514", "22P02", "22007", "22008", "22001"].includes(String(error.code))) {
                return response.status(400).json({ message: "Dados inválidos ou campos obrigatórios ausentes" });
            }
        }
        return response.status(500).json({ message: "Erro ao buscar consulta" });
    }
});

consultaRouter.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const id = request.params.id;
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
            return response.status(400).json({ message: "ID inválido" });
        }

        const registro = await consultaService.getById(id);
        return response.json(registro);
    } catch (error) {
        console.error(error);
        if (error instanceof Error && error.message === "Registro não encontrado") {
            return response.status(404).json({ message: "Registro não encontrado" });
        }
        if (error && typeof error === "object" && "code" in error) {
            if (error.code === "23503" || error.code === "23505") {
                return response.status(409).json({ message: "Registro duplicado ou relacionamento inválido" });
            }
            if (["23502", "23514", "22P02", "22007", "22008", "22001"].includes(String(error.code))) {
                return response.status(400).json({ message: "Dados inválidos ou campos obrigatórios ausentes" });
            }
        }
        return response.status(500).json({ message: "Erro ao buscar consulta" });
    }
});

consultaRouter.post("/", async (request: Request<{}, {}, CriarConsulta>, response: Response) => {
    try {
        const dados = request.body;
        if (!dados || typeof dados !== "object" || Array.isArray(dados)) {
            return response.status(400).json({ message: "Informe os dados do registro" });
        }

        const registro = await consultaService.create(dados);
        return response.status(201).json(registro);
    } catch (error) {
        console.error(error);
        if (error && typeof error === "object" && "code" in error) {
            if (error.code === "23503" || error.code === "23505") {
                return response.status(409).json({ message: "Registro duplicado ou relacionamento inválido" });
            }
            if (["23502", "23514", "22P02", "22007", "22008", "22001"].includes(String(error.code))) {
                return response.status(400).json({ message: "Dados inválidos ou campos obrigatórios ausentes" });
            }
        }
        return response.status(500).json({ message: "Erro ao criar consulta" });
    }
});

consultaRouter.put("/:id", async (request: Request<{ id: string }, {}, EditarConsulta>, response: Response) => {
    try {
        const id = request.params.id;
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
            return response.status(400).json({ message: "ID inválido" });
        }
        const dados = request.body;
        if (!dados || typeof dados !== "object" || Array.isArray(dados)) {
            return response.status(400).json({ message: "Informe os dados do registro" });
        }

        const registro = await consultaService.editar(id, dados);
        return response.json(registro);
    } catch (error) {
        console.error(error);
        if (error instanceof Error && error.message === "Registro não encontrado") {
            return response.status(404).json({ message: "Registro não encontrado" });
        }
        if (error && typeof error === "object" && "code" in error) {
            if (error.code === "23503" || error.code === "23505") {
                return response.status(409).json({ message: "Registro duplicado ou relacionamento inválido" });
            }
            if (["23502", "23514", "22P02", "22007", "22008", "22001"].includes(String(error.code))) {
                return response.status(400).json({ message: "Dados inválidos ou campos obrigatórios ausentes" });
            }
        }
        return response.status(500).json({ message: "Erro ao editar consulta" });
    }
});

consultaRouter.delete("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const id = request.params.id;
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
            return response.status(400).json({ message: "ID inválido" });
        }

        await consultaService.delete(id);
        return response.status(204).send();
    } catch (error) {
        console.error(error);
        if (error instanceof Error && error.message === "Registro não encontrado") {
            return response.status(404).json({ message: "Registro não encontrado" });
        }
        if (error && typeof error === "object" && "code" in error) {
            if (error.code === "23503" || error.code === "23505") {
                return response.status(409).json({ message: "Registro duplicado ou relacionamento inválido" });
            }
            if (["23502", "23514", "22P02", "22007", "22008", "22001"].includes(String(error.code))) {
                return response.status(400).json({ message: "Dados inválidos ou campos obrigatórios ausentes" });
            }
        }
        return response.status(500).json({ message: "Erro ao excluir consulta" });
    }
});

