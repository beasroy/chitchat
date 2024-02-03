import mongoose from "mongoose";

const connectToDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB',error.message)
    }
}

export default connectToDb;