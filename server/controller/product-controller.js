import Product from '../model/product-schema'

export const getproducts = async (req,res)=>
{
    try{
        const product = await Product.find({})
        console.log(product);
        res.status('200').json(product);
    }
    catch{
        res.status('500').json({message:error.message});
    }
}
// export default getproducts;
export const getproductById = async (req,res)=>
{
    try{
        const id = req.params.id;
        const product = await Product.findOne({'id':id})
        // console.log(product);
        res.status('200').json(product);
    }
    catch(error){
        res.status('500').json({message:error.message});
    }
}