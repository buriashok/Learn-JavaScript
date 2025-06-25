import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('')
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDb Connection Failed: ", error.message);
        process.exit(1);
    }
}