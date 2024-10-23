// const express = require('express');
// const app =express();
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

// const connectDB = require("./DbConnection/DBConnection");
// const registerUser = require('./controller/NewUserController');
// const LoginUserController = require('./controller/LoginUserController');

// app.use(cors()); 
// const port = 4000;
// app.use(express.json());
// // Connect to MongoDB   
// connectDB();



// app.post('/register', registerUser)
// app.post ('/login',LoginUserController)

// // Routes
// app.listen(port,() => {
//     console.log(`Server running on port ${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const connectDB = require('./DbConnection/DBConnection')
dotenv.config();
const app = express();
app.use(express.json());

// Connect to MongoDB

connectDB();
// Define routes

app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/resumes', resumeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

