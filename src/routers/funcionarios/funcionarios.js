import express from 'express'
import funcionariosController from '../../controllers/funcionarios/funcionariosController.js'
import auth from '../../middleware/auth.js'

const routerFuncionarios = express.Router()

routerFuncionarios.post("/funcionarios", auth, funcionariosController.createFuncionarios)

routerFuncionarios.get("/funcionarios/:id", auth, funcionariosController.getFuncionarios)

routerFuncionarios.get("/funcionarios", auth, funcionariosController.getFuncionarios)

routerFuncionarios.delete("/funcionarios/:id", auth, funcionariosController.destroyFuncionarios)

routerFuncionarios.patch("/funcionarios/:id", auth, funcionariosController.updateFuncionarios)

export default routerFuncionarios