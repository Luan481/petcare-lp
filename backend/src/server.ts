import express, {Request, type Response} from "express";
import { error } from "node:console";
import { randomUUID } from "node:crypto";

const app = express()
const port = 3000

app.use(express.json())

app.get("/health", (_request: Request, response: Response) =>{
    return response.json({
        status: "OK"
    })
})

interface CreateUserBody{
    name: string;

}


app.post("/users", (request: Request<object, object, CreateUserBody>, response: Response)=>{
    const name = request.body.name?.trim()
    if(!name) {
        return response.status(400).json({
            error: "Name is requires"
        })
    }

    return response.status(201).json({
        id: randomUUID(),
        name
    })
})

app.listen(port, ()=>{
    console.log(`API rodando em http://localhost:${port}`)
})
