const Sequelize = require('sequelize')

// const sequelize = new Sequelize('resturant_db','root','2838293yo',{dialect:'mysql',host:"localhost"});

const sequelize = new Sequelize('rest_db','root','059283805928388',{dialect:'mysql',host:"localhost"});


module.exports = sequelize;