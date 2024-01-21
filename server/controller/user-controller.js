import users from '../model/users.js'
import Products from '../model/product-schema.js'

 export const userSignup = async (req,res) => {
    const username_exist =  await users.findOne({username:req.body.username})
    const email_exist =  await users.findOne({email:req.body.email})

    // cons/ole.log(exist);
    if(username_exist && email_exist)
    return res.status(401).json({message:'This username and email is alredy exist'});
    if(username_exist)
    return res.status(401).json({message:'This username is alredy exist'});
    if(email_exist)
    return res.status(401).json({message:'This email is alredy exist'});
    try{
        const user = req.body;
        const newUser = new users(user);
        // console.log('-------------',user);
        // console.log(newUser);
        await newUser.save();
        return res.json(newUser);
        // console.log(req.body);
    } catch (error){
        console.log("this error from controller");
    }
 }

 export const userLogin = async (req,res) =>{
    try{
        const products = await users.findOne({username:req.body.username,password:req.body.password});
        console.log(req.protocol);
        // products = JSON.stringify(products);
        return res.status(200).json(products);   
        }                    
    catch{
        return res.status(500);                     
    }
 }                          
