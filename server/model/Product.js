const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const Product = sequelize.define('product',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        required:true,
        default:""
    },
    image:{
        type:DataTypes.STRING,
        required:true,
        default:""
    },
    description:{
        type:DataTypes.STRING,
        default:""
    },
    price:{
        type:DataTypes.DOUBLE,
        required:true,
        default:0
    },
    hasDiscount:{
        type:DataTypes.BOOLEAN,
        required:true,
        default:false
    },
    discount:{
        type:DataTypes.INTEGER,
        default:0
    }
})

module.exports = Product