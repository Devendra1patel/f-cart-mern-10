import express from 'express';
import { userSignup } from '../controller/user-controller';
const serverRouter = express.Router();

serverRouter.get('/signup',(req,res)=>{ 
    console.log("ddddd");
});

export default serverRouter;  