const newUser  = require("../model/NewUserModel")

const LoginUserController = async(req,res)=>{
    const {email,password} = req.body

    if(!email||!password){
        return res.status(400).json({msg:"All fields are required"})
    }
    try{
        const user = await newUser.findOne({email})
        if(!user){
            return res.status(404).json({msg:"User not found"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({msg:"Invalid credentials"})
        }
        res.json({msg:"User logged in successfully"})
        
    }catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

module.exports = LoginUserController