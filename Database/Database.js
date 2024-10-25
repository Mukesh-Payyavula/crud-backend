const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://payyavulamukesh:Pmy%4052141@crud.j5qda.mongodb.net/crud?retryWrites=true&w=majority");
        console.log("MongoDB connected Successfully");
        
    }catch (error){
        console.error(`MongoDB connection error: ${PORT}`);
    }
}

module.exports = {mongoose, connectDB}