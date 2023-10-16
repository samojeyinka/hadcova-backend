const  mongoose  = require("mongoose");


const CategorySchema = new mongoose.Schema({
    name:{
    type:String,
    required:[true, 'Please give category name'],
    unique:true,
     trim:true,
    maxlength:[15,'Category name length should not exceed 15']
    },
    description:{
        type:String,
        default:'Say something about your category',
        trim:true
    }
    
});

module.exports = mongoose.model('Category', CategorySchema);