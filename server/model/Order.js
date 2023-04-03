const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const Order = sequelize.define('order',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    totalPrice:{
        type:DataTypes.INTEGER,
        required:true
    },
    isPaid:{
        type:DataTypes.BOOLEAN,
        required:true,
        default:false
    },
    status:{
        type:DataTypes.STRING,
        required:true
    }
})

module.exports = Order