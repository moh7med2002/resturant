const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const Order = sequelize.define('product_order',{
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
    price:{
        type:DataTypes.INTEGER,
        required:true
    },
    qty:{
        type:DataTypes.INTEGER,
        required:true
    }
})

module.exports = Order