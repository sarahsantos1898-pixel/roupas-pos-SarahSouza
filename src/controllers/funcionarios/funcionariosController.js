import getAll from "../../services/funcionarios/getFuncionarios.js";
import getOne from "../../services/funcionarios/getFuncionarios.js";
import create from "../../services/funcionarios/createFuncionarios.js";
import destroy from "../../services/funcionarios/destroyFuncionarios.js";
import update from "../../services/funcionarios/updateFuncionario.js";
import createByList from "../../services/estoque/createEstoque.js";
import funcionarios from "../../model/funcionarios/funcionarios.js";

const getActor = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.status(400);
      res.json({
        message: "id é obrigatório",
      });
      return;
    }

    const actor = await getOne(id)

    if (!funcionario) {
      res.status(404);
      res.json({
        message: "Funcionario não encontrado",
      });
      return;
    }

    res.status(200);

    res.json({
      data: funcionario
    });

  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({
      message: "ocorreu um erro",
    });
  }
};

const getFuncionarios = async (req, res) => {
  const funcionarios = await getAll()

  res.status(200)
  res.json({
    data: funcionarios
  });
};

const createFuncionarios = async (req, res) => {
  try {
    const { name, uf, city } = req.body;

    if (!name || !uf || !city) {
      res.status(400);
      res.json({
        message: "Nome, UF e cidade são obrigatórios",
      });
      return;
    }

    const createFuncionarios = await create(req.body);

    if (!createFuncionarios) {
      res.status(400);
      res.json({
        message: "Erro ao criar o funcionario",
      });
      return;
    }

    let estoqueCreate
    if (req.body.estoque) {
      estoqueCreate = await createByList(req.body.estoque, createEstoque.id)
    }

    res.status(201);
    res.json({
      data: createEstoque,
      estoqueCreate
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({
      message: "ocorreu um erro",
    });
  }
};

const destroyActor = async (req, res) => {
  const id = req.params.id
  
  const actor = await destroy(id)

  if (!actor) {
    res.status(400)
    res.json({
      message: "Erro na operação"
    })
    return
  }

  res.status(200)
  res.json({
    message: "Deletado com sucesso",
    actor
  })

}

const updateActor = async (req, res) => {
  const data = req.body
  const id = req.params.id
 
  const actor = await update(data, id)

  if (!actor) {
    res.status(400)
    res.json({
      message: "não foi possivel atualizar"
    })
    return
  }

  res.status(200)
  res.json({
    message: "atualizado com sucesso",
    actor 
  })

}

export default {
  getFuncionario,
  getFuncionarios,
  createFuncionarios,
  destroyActor,
  updateActor
};