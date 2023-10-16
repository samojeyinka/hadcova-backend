//IMPORT MONGOOSE

const { default: mongoose } = require("mongoose");



const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please input task title'],
        maxlength:[100, 'Sorry! you exceeded the maximum character'],
        trim:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    details:{
        type:String,
        trim:true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }

});

module.exports = mongoose.model('Task', TaskSchema);