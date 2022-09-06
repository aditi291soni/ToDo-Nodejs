const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/todooo");
const userSchema=mongoose.Schema({
  task:String,
})
module.exports=mongoose.model("users",userSchema)