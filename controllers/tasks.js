const Task = require("../models/Task");
const asyncWrapper = require('../middleware/asyncWrapper')
//CREATE TASK ROUTE
const createTask = asyncWrapper(async (req, res) => {
        //CREATE TASK QUERY
        const task = await Task.create(req.body);
        res.status(201).json({task});
});

//GET ALL TASKS ROUTE
const getAllTasks = asyncWrapper(async (req, res) => {
    //GET ALL TASKS QUERY
    const tasks =  await Task.find({});

    if(tasks.length === 0){
        return res.status(404).json({msg:`No task available`});
    }
    res.status(201).json({tasks});
});
  //GET SINGLE TASK ROUTE
const getTask = asyncWrapper(async (req, res) => { 

        //GET SINGLE TASK BY ID QUERY
        const {id: taskID} =  req.params;
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`No task with the id : ${taskID}`});
        }
        res.status(200).json({task});
  
});


  //UPDATE TASK ROUTE
const updateTask = asyncWrapper( async (req, res) => {
   
    const {id: taskID} = req.params; 
    const update = req.body;
    const task = await Task.findOneAndUpdate({_id:taskID},update,{new:true, runValidators:true});

        if (!task){
            return res.status(404).json({msg:`No task with the id : ${taskID}`});
        }
        res.status(200).json({task});
      
});

  //DELETE TASK ROUTE
const deleteTask = asyncWrapper( async (req, res) => {
        //delete SINGLE TASK BY ID QUERY
        const {id:taskID} =  req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if (!task){
            return res.status(404).json({msg:`No task with the id : ${taskID}`});
        }
        res.status(200).json({task}) ;
      
});


module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}