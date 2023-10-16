//IMPORT EXPRESS MODULE
const express = require('express');
//ACCESS THE ROUTER MODULE
const router = express.Router();

//DESTRUCTURE EVERY ROUTE FROM THE CONTROLLERS
const { getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask,
} = require('../controllers/tasks');

//ASIGN EACH CONTROLLERS TO THE CORESSPONDING ROUTES
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);



//EXPORT ROUTER 
module.exports = router;


//ROUTES MAPS

// app.get('/api/v1/tasks')  - get all tasks
// app.post('/api/v1/tasks')  - create task
// app.patch('/api/v1/tasks')  - update task
// app.delete('/api/v1/tasks')  - delete task