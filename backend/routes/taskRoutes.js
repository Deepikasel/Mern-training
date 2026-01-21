const express=require('express')
const router=express.Router();
const {task}=require('../controllers/taskController')
router.post('/task',task)
module.exports=router