import express from 'express'
import routerEstoque from "./routers/estoque/estoque.js"    
import routerUser from './routers/user/user.js'
import cors from "cors";
import routerFuncionarios from './routers/funcionarios/funcionarios.js';
import produtosRouter from './routers/produtos/produtos.js';

const app = express()

app.use(cors());

app.use(express.json())
app.use(routerFuncionarios)
app.use(routerUser)
app.use(produtosRouter);

export default app

