const express = require('express');
const router = express.Router();
const {
    getAllTasksInCategory,
    deleteAllTasksInCategory

} = require('../controllers/eachCategory');

router.route('/categories/:categoryID/tasks').get(getAllTasksInCategory).delete(deleteAllTasksInCategory);



module.exports = router;

