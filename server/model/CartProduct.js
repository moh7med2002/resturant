const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const CartOrder = sequelize.define('cart_product',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    qty:{
        type:DataTypes.INTEGER,
        required:true
    },
})

module.exports = CartOrder