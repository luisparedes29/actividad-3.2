const { Sequelize, Op, fn} = require ("sequelize");
const FilmModel = require("./models/films");
const UserModel= require('./models/users');

const config = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: "mysql",
    pool: {
        max: 2,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const sequelize = new Sequelize('peliculas_db','root',config.PASSWORD,{
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,
    pool: config.pool,
    //storage: "./backend_videoconferencia3.sql"
});

const Film= FilmModel(sequelize,Sequelize);
const User= UserModel(sequelize,Sequelize);

sequelize.sync({force:false})
.then(()=>{
    console.log("Tablas sincronizadas")
})

module.exports = {
    Film,
    User
}