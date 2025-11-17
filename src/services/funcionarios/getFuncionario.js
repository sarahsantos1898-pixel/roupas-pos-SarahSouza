import Model from "../../model/index.js";

const getOne = async (id) => {
  try {
    const funcionario = await Model.funcionario.findOne({
      where: {
        id: id,
      },
    });

    if (!funcionario) {
      return false;
    }

    return funcionario;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getOne;