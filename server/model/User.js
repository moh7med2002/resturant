const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const User = sequelize.define('user',{
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
        defaultValue:"user.png"
    },
    phone:{
        type:DataTypes.STRING,
        required:true,
        defaultValue:""
    },
    country:{
        type:DataTypes.STRING,
        required:true,
        defaultValue:""
    }
})

module.exports = User