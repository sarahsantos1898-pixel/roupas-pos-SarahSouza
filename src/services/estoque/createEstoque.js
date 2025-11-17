import Estoque from "../../model/estoque/estoque.js";
import Movie from "../../model/movies/Movies.js";

const createByList = async (estoque, estoqueId) => {
    const response = {
        success: [],
        error: []
    }

    for (const estoque of estoque) {
        const estoqueCreate = await Estoque.create({
            name: estoque,
            EstoqueId
        })

        if (!estoqueCreate) {
            response.error.push(Estoque)
            continue
        }

        response.success.push(Estoque)
    }

    return response
}

export default createByList