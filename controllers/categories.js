const Category = require('../models/Category');
const asyncWrapper = require('../middleware/asyncWrapper');

//CREATE TASK
const createCategory = asyncWrapper(async (req,res) => {
        const category = await Category.create(req.body);
        res.status(200).json({category});
});
//GET ALL CATEGORIES
const getAllCategories = asyncWrapper(async (req, res) => {
          const categories = await Category.find({});
          if(categories.length === 0){
           return res.status(404).json({msg:`No task available, add new task`});
          }
          res.status(200).json({categories});
});

//GET SINGLE CATEGORY

const getCategory = asyncWrapper(async(req, res) => {
        const {id:CategoryID} = req.params;
        const category = await Category.findById({_id:CategoryID});
        if (!category){
          return  res.status(404).json({msg:`No task with the Id : ${CategoryID}`});
        }
        res.status(200).json({category});
});


//DELETE CATEGORY
const deleteCategory = asyncWrapper(async (req, res) => {
    const {id:CategoryID} = req.params;
    const category = await Category.findByIdAndRemove({_id:CategoryID}) ;
    if (!category){
        return  res.status(404).json({msg:`No task with the Id : ${CategoryID}`});
      }
      res.status(200).json({category});
});

//UPDATE CATEGORY

const updateCategory = asyncWrapper(async(req, res) => {
        const {id:CategoryID} = req.params;
        const update = req.body
        const category = await Category.findByIdAndUpdate({_id:CategoryID},update,{
            new:true
        });
        if (!category){
            return  res.status(404).json({msg:`No task with the Id : ${CategoryID}`});
          }
          res.status(200).json({category});
});

module.exports = {
    createCategory,
    getAllCategories,
    getCategory,
    updateCategory,
    deleteCategory

}
