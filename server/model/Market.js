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
        default:""
    },
    image:{
        type:DataTypes.STRING,
        required:true,
        default:""
    },
    description:{
        type:DataTypes.TEXT,
        default:""
    },
    views:{
        type:DataTypes.INTEGER,
        default:0
    },
    rate:{
        type:DataTypes.DOUBLE,
        default:0
    }
})

module.exports = Market