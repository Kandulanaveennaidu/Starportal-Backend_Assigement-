import mongoose from "mongoose";



 export const dbConnection = async(req,res)=>{
    try {
        await mongoose.connect("mongodb+srv://kandulanaveennaidu017:KG4Wqqrvd2KY4rmg@cluster0.mdgstka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    } catch (error) {
       console.log("mongodb connection error");
    }
}