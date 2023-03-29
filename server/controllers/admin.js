const Admin = require('../model/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



module.exports.register = async(req,res,next)=>
{
    try{
        const {email , password} = req.body;
        const admin = await Admin.findOne({where:{email:email}});
        if (admin){
            // const error = new Error ('E-mail already found');
            // error.statusCode = 403;
            // throw error;
            res.status(403).json({message_en:'E-mail already used' , message_ar:"الايميل مستخدم"});
        }
        const hashPass = await bcrypt.hash(password,12);
        const newAdmin = await Admin.create({
            email:email,
            password:hashPass,
        });
        await newAdmin.save()
        res.status(200).json({message_en:'admin has been created' , message_ar:"تم انشاء حساب الادمن"});
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
            // const error = new Error('E-mail not found');
            // error.statusCode = 422;
            // throw error;
            res.status(403).json({message_en:'E-mail not found' , message_ar:"الايميل غير موجود"});
        }
        const isPasswordMatch = await bcrypt.compare(pass,currentAdmin.password);
        if(!isPasswordMatch){
            // const error = new Error('Invalid password');
            // error.statusCode=422;
            // throw error;
            res.status(403).json({message_en:'Invalid password' , message_ar:"كلمة المرور خاطئة"});
        };
        const {password,...other} = {...currentAdmin.toJSON()}
        const token = jwt.sign({
            adminId:currentAdmin.id,
        },
        "token"
        );
        res.status(200).json({admin:other, token:token});
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}
