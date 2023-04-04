const Market = require('../model/Market')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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