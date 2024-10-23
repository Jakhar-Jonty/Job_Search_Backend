// const mongoose = require('mongoose')

// // creating new schema for new user

// const newUserSchema = new mongoose.Schema({
//     name:{
//         required:true,
//         type: String,
//         minlength: 3
//     },
//     email: {
//         required: true,
//         type: String,
//         unique: true,
//         match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     },
//     password:{
//         required: true,
//         type: String,
//         minlength: 8,
//         match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
//     },
//     phoneNumber: {type:Number,},
//     address: {type:String,},
//     jobTitle: {type:String,},
//     company: {type:String,},
//     description: {type:String,},
//     website: {type:String,},
//     linkedin: {type:String,},
//     github: {type:String,},
//     resume: {type:String,},
//     experience: {type:String,},
//     skills: {type:String,},
// })

// const User = mongoose.model('User', newUserSchema)
// module.exports = User


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['job-seeker', 'recruiter'],
        default: 'job-seeker',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('User', userSchema);
