const express=require('express')
const router=express.Router()
const Task =require('../model');
var methodOverride = require('method-override')
router.use(methodOverride('_method'))
//GET
router.get("/task", (req, res) => {
    // result ==> array of objects
  try{
        Task.find().then((result) => {
      res.render("task", { array: result });
    })
  }catch{((error) => 
    console.log(error)
)}
  
  
  });
router.get("/", (req, res) => {
    // result ==> array of objects

      res.render("index");
  });
//POST
router.post('/',async (req,res)=>{
try {
    const tasks=new Task(req.body)
   await tasks.save()
     
   res.redirect('/')
} catch (error) {
    res.status(400).json({msg:'some thing wrong !'})
}

})
//GET BY ID
router.get('/get/:id',async(req,res)=>{
    try {
        const tasks= new Task.findById(req.params.id)
        res.render('get',{arr:tasks})

    } catch (error) {
        res.status(400).json({msg:'some thing wrong !'}) 
    }
})
//PUT
router.put('/edit/:id',async(req,res)=>{
    try {
        const tasks= new Task.findByIdAndUpdate(req.params.id,req.body)
        res.render('edit',{arr:tasks})

    } catch (error) {
        
        res.status(400).json({msg:'some thing wrong !'})
    }
})

//DELETE
router.delete('/edit/:id',async(req,res)=>{
    try {
       await  Task.findByIdAndDelete(req.params.id)
        res.redirect('/task')
       
    } catch (error) {
        
        res.status(400).json({msg:'some thing wrong !'})
    }
})
module.exports=router;
