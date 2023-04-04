const Admin = require('../model/Admin');
const Market = require('../model/Market')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = async(req,res,next)=>
{
    try{
        const {email , password} = req.body;
        const admin = await Admin.findOne({where:{email:email}});
        if (admin){
            return res.status(403).json({message:'E-mail already used'});
        }
        const hashPass = await bcrypt.hash(password,12);
        const newAdmin = await Admin.create({
            email:email,
            password:hashPass,
        });
        await newAdmin.save()
        res.status(200).json({message:'admin has been created' });
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}


exports.login = async(req,res,next)=>{
    const {email,password : pass} = req.body;
    try{
        const currentAdmin = await Admin.findOne({where:{email:email}});
        if(!currentAdmin){
            return res.status(403).json({message:'E-mail not found'});
        }
        const isPasswordMatch = await bcrypt.compare(pass,currentAdmin.password);
        if(!isPasswordMatch){
            return res.status(403).json({message:'Invalid password'});
        };
        const {password,...other} = {...currentAdmin.toJSON()}
        const token = jwt.sign({
            adminId:currentAdmin.id,
        },
        "token"
        );
        res.status(200).json({admin:other, token:token ,message:"Success login"});
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}

module.exports.addMarket = async(req,res,next) => {
    const {name , email , password} = req.body;
    try{
        const market = await Market.findOne({where:{email:email}});
        if (market){
            return res.status(403).json({message:'E-mail already used'});
        }
        const hashPass = await bcrypt.hash(password,12);
        const newMarket = await Market.create({
            name,email,password:hashPass
        });
        await newMarket.save();
        res.status(201).json({message:'market has been created' });
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
} 

module.exports.getAllMarket = async (req,res,next) => {
    try{
        const markets = await Market.findAll({
            attributes: { exclude: ['password'] }
        });
        res.status(200).json({markets});
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}