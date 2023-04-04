const Market = require('../model/Market')
const Department = require('../model/Department')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Product = require('../model/Product');

exports.login = async(req,res,next)=>{
    const {email,password : pass} = req.body;
    try{
        const currentMarket = await Market.findOne({where:{email:email}});
        if(!currentMarket){
            return res.status(403).json({message:'E-mail not found'});
        }
        const isPasswordMatch = await bcrypt.compare(pass,currentMarket.password);
        if(!isPasswordMatch){
            return res.status(403).json({message:'Invalid password'});
        };
        const {password,...other} = {...currentMarket.toJSON()}
        const token = jwt.sign({
            marketId:currentMarket.id,
        },
        "token"
        );
        res.status(200).json({market:other, token:token ,message:"Success login"});
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}

exports.addDepartment = async(req,res,next)=>
{
    try{
        const {title} = req.body
        const marketId = req.marketId
        const department = await Department.create({title:title,marketId:marketId})
        await department.save()
        res.status(201).json({message:"department has been created"})
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}

exports.getAllDepartments = async(req,res,next)=>
{
    try{
        const {marketId} = req.marketId
        const market = await Market.findOne({where:{id:marketId}})
        if(!market)
        {
            const error = new Error('failed occured')
            error.statusCode = 404 ;
            throw error ;
        }
        const departments = await Department.findAll({where:{marketId:marketId}})
        res.status({departments})
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}

exports.addProduct = async(req,res,next)=>
{
    try{
        const {title,description,price,departmentId} = req.body
        if(!req.file)
        {
            const error = new Error('image is not found')
            error.statusCode = 422
            throw error
        }
        const product = await Product.create({title,description,departmentId,price,image:req.file.filename})
        await product.save()
        res.status(201).json({message:"product has been created"})
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}