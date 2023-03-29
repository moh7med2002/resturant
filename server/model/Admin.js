const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const Admin = sequelize.define('Admin',{
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
    }
})

module.exports = Admin