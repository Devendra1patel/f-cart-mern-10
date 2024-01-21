import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js';
import bodyParser from 'body-parser';
import {userSignup, userLogin} from './controller/user-controller.js';
//---making error in controller
// import  {getproducts}  from './controller/pc.js';
//---------
// import serverRouter from './routes/route.js';
import Product from './model/product-schema.js';
// import { getproductById,getproducts } from './controller/product-controller.js';
// import getproducts from './controller/product-controller.js';


dotenv.config();
const app = express();
let Route = express.Router()
// const serverRouter = express.Router();  

app.use(cors()); 
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Route); 



const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
console.log(USERNAME,PASSWORD);
Connection(USERNAME, PASSWORD); 
app.listen(PORT,()=>{ 
   console.log(`Server Running successfully on port :${PORT}`);
});

// it uses  hear because it showing error in controller
const getproducts = async (req,res) =>{
   try{
       const products = await Product.find({});
        res.status(200).json({products});
   }catch{
        res.status(500).json(error.message);
   }
}
const getproductById = async (req,res)=>
{
    try{
        const id = req.params.id;
        const product = await Product.findOne({'id':id})
        console.log("-->",product);
        res.status('200').json(product);
    }
    catch(error){
        res.status('500').json({message:error.message});
    }
}
Route.post('/signup',userSignup); 
Route.post('/login',userLogin);
Route.get('/products',getproducts ); 
Route.get('/product/:id',getproductById);

DefaultData(); 