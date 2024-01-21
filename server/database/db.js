import mongoose from "mongoose";

export const Connection = async (USERNAME, PASSWORD) =>{
      
    const URL = `mongodb+srv://devendra:CfLC8yqyES3X1Wx4@Cluster0Flipkart.puk8vjp.mongodb.net/?retryWrites=true&w=majority`
    try { 
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true });
        console.log("hello");  
        console.log(`Database connect succesfull`);
    } catch (error){
        console.log(`Error while connecting with the databse`,error.message);
    }
}
export default Connection;  