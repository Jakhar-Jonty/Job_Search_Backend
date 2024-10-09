const mongoose = require('mongoose');

// Connect to MongoDB

const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/JobPlatform").then(()=>{
        console.log('MongoDB connected...');
    }).catch(err=>console.log("failed to connect to MongoDB",err))
}

module.exports = connectDB;
