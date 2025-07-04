import mongoose from 'mongoose'

const dbConfig = async ()=>{
    try{

        const res = await mongoose.connect("mongodb+srv://muthupandir74738:HvDmOjIHiOFdiygZ@cluster0.lvy4nvd.mongodb.net/learn")
        console.log("Database connected successfully");
        
    }catch(err){
        console.log(err);
        
    }
}
export default dbConfig;