
import sequelize from "../config/database.js";
import Funcionarios from "./funcionarios/funcionarios.js";
import Estoque from "./estoque/estoque.js";
import User from "./user/user.js";

Actor.hasMany(Movie, {
    foreignKey: {
        name: "funcionariosId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }
})

sequelize.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("Todas as tabelas foram sincronizadas com sucesso.");
})

export default {
    Funcionarios
}
