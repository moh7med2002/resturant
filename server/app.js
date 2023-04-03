const express = require('express')
const app = express()
const parser = require('body-parser')
const multer = require('multer')
const path = require('path')

app.use(parser.json())
const fileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'images');
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+"-" + file.originalname)
    }
})

app.use(multer({storage:fileStorage}).single('image'));
app.use('/images', express.static(path.join(__dirname,'images')));

app.use((req,res,next)=>
{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,PUT,PATCH,POST,DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
    if(req.method==="OPTIONS")
    {
        return res.sendStatus(200)
    }
    next();
})


const models = require('./model');

// admin router 
const adminRoutes = require('./routes/admin');
app.use('/api/admin' , adminRoutes);


app.use((error,req,res,next)=>
{
    console.log(error);
    const status = error.statusCode
    const message = error.message
    res.status(status).json({message:message})
})

const sequlize = require('./utils/database') 
sequlize.sync({force:true})
.then(result=>
    {
        console.log('connection')
        app.listen(5000)
    })