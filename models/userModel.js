const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userModel = new Schema({
  userid:{type:String,required:true,unique:true},
  username:{type:String,required:true},
  password:{type:String,required:true},
  email:{type:String, unique:true,
    validate: {
      validator: (email) => {
        return /[\w]+@[\w]+.[\w]+/ig.test(email);
      },
      message:"email not valid"
    }
  },
  image:{type:String},
  point:{type:Number,default:0}
},  { timestamps: {createAt:'Date'}});

module.exports = mongoose.model('userModel', userModel);
