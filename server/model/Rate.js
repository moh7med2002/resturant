const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const Rate = sequelize.define('rate',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    rate:{
        type:DataTypes.INTEGER,
        required:true
    },
    comment:{
        type:DataTypes.STRING,
        required:true
    },
})

module.exports = Rate