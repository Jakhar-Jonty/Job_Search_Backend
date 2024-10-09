const express = require('express');
const app =express();
const cors = require('cors');


const connectDB = require("./DbConnection/DBConnection");
const registerUser = require('./controller/NewUserController');

app.use(cors()); 
const port = 4000;
app.use(express.json());
// Connect to MongoDB   
connectDB();



app.post('/register', registerUser)

// Routes
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});