const Task = require('../models/Task');
const task=require('../models/Task')

exports.task=async(req,res)=>{
    try{
        const task= await Task.create({
            title:req.body.title,
            description:req.bosy.description,
            status:req.status||'pending',
            user:req.body.id
        })
        res.status(201).send("Task Added Successfully");
    }
   catch(error){
    res.status(500).send(error)
   }

    }
