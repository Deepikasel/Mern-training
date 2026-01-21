const mongoose=require('mongoose');
const taskScheme=mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:String,
        default:"pending"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    }
})

module.exports=mongoose.model('Tasks',taskScheme);