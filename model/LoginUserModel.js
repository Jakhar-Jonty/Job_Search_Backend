const mongoose = require('mongoose')

const loginUserSchema =  mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password:{
        required: true,
        type: String,
        minlength: 8,
        match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    }
})

module.exports = mongoose.model('LoginUser', loginUserSchema)