const express = require('express');
const router = express.Router();

const {
    createCategory,
    getAllCategories,
    getCategory,
    updateCategory,
    deleteCategory
} = 
require('../controllers/categories');
router.route('/').post(createCategory).get(getAllCategories);
router.route('/:id').get(getCategory).put(updateCategory).delete(deleteCategory);

module.exports = router