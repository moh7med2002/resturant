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
        defaultValue:""
    },
    image:{
        type:DataTypes.STRING,
        required:true,
        defaultValue:""
    },
    description:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    price:{
        type:DataTypes.DOUBLE,
        required:true,
        defaultValue:0
    },
    hasDiscount:{
        type:DataTypes.BOOLEAN,
        required:true,
        defaultValue:false
    },
    discount:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
})

module.exports = Product