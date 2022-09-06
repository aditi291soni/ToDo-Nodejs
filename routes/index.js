var express = require('express');
var router = express.Router();
const userModel=require("./users");

/* GET home page. */
router.get('/',function(req, res) {
  userModel.find()
  .then(function(data){
    res.render('index',{data})
})
});
router.post('/todo',function(req, res) {
   userModel.create({
    task:req.body.task
  })
  .then(function (item){
res.redirect('/')
  
  })
   
});
router.get("/delete/:id",function(req,res){
userModel.findOneAndDelete({_id:req.params.id})
.then((deleteddata)=>{
  res.redirect('/')
})
})


module.exports = router;
