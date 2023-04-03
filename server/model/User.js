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
        default:""
    },
    image:{
        type:DataTypes.STRING,
        required:true,
        default:""
    },
    phone:{
        type:DataTypes.STRING,
        required:true,
        default:""
    },
    country:{
        type:DataTypes.STRING,
        required:true,
        default:""
    }
})

module.exports = User