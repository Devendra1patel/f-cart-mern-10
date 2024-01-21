import Product from "../model/product-schema";

// const getproducts = async (req,res) =>{
//     try{
//         const products = await Products.find({});
//          res.status(200).json({products});
//     }catch{
//          res.status(500).json(error.message);
//     }
// }
export const getproducts = async (req,res) =>{
    try{
        const p = await Product.find({});
         res.status(200).json({p});
    }catch{
         res.status(500).json(error.message);
    }
 }
// export default getproducts;