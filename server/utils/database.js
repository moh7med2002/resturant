const Sequelize = require('sequelize')

const sequelize = new Sequelize('resturant_db','root','2838293yo',{dialect:'mysql',host:"localhost"});

module.exports = sequelize;