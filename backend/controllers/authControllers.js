const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/User')

exports.register=async(req,res)=>{
    try{
    const {name,email,password}=req.body;
    const existingUser= await User.findOne({email})
    if (!name || !email || !password) {
  return res.status(400).send({ message: "All fields required" });
}

    if(existingUser){
      return   res.status(400).send({message:"User already exists"});
    }
    const hashedpassword= await bcrypt.hash(password,10);
    const user=await User.create({
        name,
        email,
     password:hashedpassword
    });
    res.status(201).send({msg:"user created"})
}
    catch(error){
        res.status(500).send(error)
    }
}
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const existingUser=await User.findOne({email})
        if(!existingUser){
res.status(400).send("email not registered")
        }
const isMatching=await bcrypt.compare(password,existingUser.password)
if(!isMatching){
    !res.status(400),send("invalid credinals")
}
const token=jwt.sign(
    {
        id:existingUser._id
    },
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
)
//res.status(200).send("Login Successfully")
res.json({token:{token}})
    }
    catch(error){
        res.status(500).send(error)
    }

}