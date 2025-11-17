import { DataTypes } from "@sequelize/core";
import sequelize from "../../config/database.js";

const Movie = sequelize.define('estoque', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Estoque