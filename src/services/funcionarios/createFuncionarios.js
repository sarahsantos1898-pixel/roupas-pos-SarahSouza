
import Model from "../../model/index.js"

const createFuncionarios = async (funcionarios) => {
    try {
        const create = await Model.Actor.create({
            name: actor.name,
            uf: funcionarios.uf,
            city: funcionarios.city
        })  

        if (!create) {
            return false;
        }

        return create
    } catch (error) {
        return false
    }
}

export default createFuncionarios
