const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const Market = sequelize.define('market',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    password:{
        type:DataTypes.STRING,
        required:true
    },
    email:{
        type:DataTypes.STRING,
        required:true
    },
    name:{
        type:DataTypes.STRING,
        required:true,
        defaultValue:""
    },
    image:{
        type:DataTypes.STRING,
        required:true,
        defaultValue:"sdefault.jpg"
    },
    description:{
        type:DataTypes.TEXT,
        defaultValue:""
    },
    views:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    rate:{
        type:DataTypes.DOUBLE,
        defaultValue:0
    }
})

module.exports = Market