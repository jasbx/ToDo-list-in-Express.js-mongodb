const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const Tasks =new Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const Task = mongoose.model("Task", Tasks);

module.exports=Task;