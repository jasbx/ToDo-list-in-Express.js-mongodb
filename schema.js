
const { default: mongoose } = require('mongoose')
const schema= mongoose.Schema;
const posts= new schema({
    title:String,
    name:String,
    post:String

    
})


const Mydata=mongoose.model("Mydataa",posts)
module.exports=Mydata