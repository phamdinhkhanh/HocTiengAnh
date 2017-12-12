const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const questionModel = new Schema({
  title:{type:String,required: true,unique:true},
  answers:{type:Array,required:true},
  result:{type:Number,unique: true},
  points:{type:Number,required:true}
},  { timestamps: {createAt:'Date'}});

module.exports = mongoose.model('questionModel',questionModel);
