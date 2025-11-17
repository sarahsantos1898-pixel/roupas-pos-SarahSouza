
import Estoque from "../../model/estoque/estoque.js"
import funcionarios from "../../model/funcionarios/funcionarios.js"
import Actor from "../../model/funcionarios/funcionarios.js"
import Movie from "../../model/movies/Movies.js"    

const getAll = async () => {
    const funcionarios = await funcionarios.findAll({
        include: Estoque
    })
    return funcionarios
}

export default getAll
