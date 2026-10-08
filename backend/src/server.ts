import express from "express"
import { clientesRouter } from "./routes/clientes.routes";
import { animaisRouter } from "./routes/animais.routes";
import { funcionarioRouter } from "./routes/funcionario.route";
import { estoqueRouter } from "./routes/estoque.route";
import { cargoRouter } from "./routes/cargo.route";
import { aumigoRouter } from "./routes/aumigo.route";
import { coletaRouter } from "./routes/coleta.route";
import { consultaRouter } from "./routes/consulta.route";
import { frotaRouter } from "./routes/frota.route";
import { logsSistemaRouter } from "./routes/logs_sistema.route";
import { parceiroRouter } from "./routes/parceiro.route";
import { petDonoRouter } from "./routes/pet_dono.route";
import { registroPontoRouter } from "./routes/registro_ponto.route";
import { servicoRouter } from "./routes/servico.route";
import { vendaRouter } from "./routes/venda.route";
import { authRoutes } from "./routes/auth.routes";
import { ensureAuth } from "./middleware/authmiddleware.js";


const app = express()
const port = 3000

app.use(express.json())
app.use(ensureAuth)

app.use("/cliente", clientesRouter)
app.use("/animais", animaisRouter);
app.use("/funcionario", funcionarioRouter)
app.use("/estoque", estoqueRouter)
app.use("/cargo",cargoRouter)
app.use("/aumigo", aumigoRouter)
app.use("/coleta", coletaRouter)
app.use("/consulta", consultaRouter)
app.use("/frota", frotaRouter)
app.use("/logs_sistema", logsSistemaRouter)
app.use("/parceiro", parceiroRouter)
app.use("/pet_dono", petDonoRouter)
app.use("/registro_ponto", registroPontoRouter)
app.use("/servico", servicoRouter)
app.use("/venda", vendaRouter)
app.use("/auth", authRoutes)



app.listen(port, ()=>{
    console.log(`API rodando em http://localhost:${port}`)
})
