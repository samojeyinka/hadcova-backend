const Task = require('../models/Task');
const asyncWrapper = require('../middleware/asyncWrapper');

//GET ALL TASKS UNDER A PARTICULAR CATEGORY USING CATEGORY ID

const getAllTasksInCategory = asyncWrapper(async (req, res) => {
        const {categoryID} = req.params;
        const tasks = await Task.find({category: categoryID});
        if(tasks.length === 0){
           return res.status(404).json({msg:`No task available`});
        }
        res.status(200).json({tasks});
});

//DELETE EVERY TASKS UNDER A CATEGORY AT ONCE

const deleteAllTasksInCategory = asyncWrapper(async (req, res) => {
  
        const { categoryID } = req.params;
        const tasks = Task.find({ category: categoryID });
        const deleteTasks = await Task.deleteMany(tasks);
        res.json({ deleteTasks })
});

module.exports = {
    getAllTasksInCategory,
    deleteAllTasksInCategory
}