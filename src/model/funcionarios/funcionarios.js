import { DataTypes } from "@sequelize/core";
import sequelize from "../../config/database.js";       
import funcionariosController from "../../controllers/funcionarios/funcionariosController.js";

const Actor = sequelize.define('funcionarios', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uf: {
        type: DataTypes.STRING(2),
        allowNull: false
    }
})

export default funcionarios