import Funcionario from "../../model/funcionarios/funcionarios.js"

const update = async (data, id) => {
    const qtd = await funcionario.update(data, {
       where: {
        id
       } 
    })

    if (qtd == 0) {
        return false
    }

    const funcionario = await funcionario.findByPk(id)

    return funcionario
}

export default update