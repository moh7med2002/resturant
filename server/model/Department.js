const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const Department = sequelize.define('department',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    tite:{
        type:DataTypes.STRING,
        required:true
    },
})

module.exports = Department