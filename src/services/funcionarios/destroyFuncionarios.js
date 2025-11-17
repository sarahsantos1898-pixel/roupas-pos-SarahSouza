
import Funcionarios from "../../model/funcionarios/funcionarios.js"

const destroy = async (id) => {
    const actor = await Funcionarios.destroy({
        where: {
            id
        }
    })

    if (!actor) {
        return false
    }

    return actor
}

export default destroy
