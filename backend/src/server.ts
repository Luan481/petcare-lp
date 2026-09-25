import express, {Request, type Response} from "express";
import { randomUUID } from "node:crypto"
import { clientesRouter } from "./routes/clientes.routes";
import { animaisRouter } from "./routes/animais.routes";
import { funcionarioRouter } from "./routes/funcionario.route";
import { estoqueRouter } from "./routes/estoque.route";
import { cargoRouter } from "./routes/cargo.route";

const app = express()
const port = 3000

app.use(express.json())


app.use("/cliente", clientesRouter)
app.use("/animais", animaisRouter);
app.use("/funcionario", funcionarioRouter)
app.use("/estoque", estoqueRouter)
app.use("/cargo",cargoRouter)



app.listen(port, ()=>{
    console.log(`API rodando em http://localhost:${port}`)
})
