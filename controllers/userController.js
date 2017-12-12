const userModel = require('../models/userModel');
const questionModel = require('../models/questionModel');
const bcrypt = require('bcrypt');


const getAllUser = (callback) => {
  userModel.find({},(err,data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  })
}

const getUserById = (id, callback) => {
  return userModel.findOne({_id:id},(err,data) => {
    if (err) {
      callback(err);
    } else {
      callback(null,data);
    }
  })
}

const checkUser = (userid, callback) => {
  return userModel.findOne({userid:userid},"userid",(err,data) => {
    if(err){
      callback(err);
    } else {
      callback(null,data);
    }
  });
}

const login = (userid, callback) => {
  return userModel.findOne({userid:userid},(err,data) => {
    if(err){
      callback(err);
    } else {
      callback(null,data);
    }
  });
}


const createUser = (user, callback) => {
  let userid = checkUser(user.userid,(err,data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

  if(userid != null){
    bcrypt.hash(user.password,10,(err,hash) => {
      let newUser = {
        userid:user.userid,
        username: user.username,
        password: hash,
        email: user.email,
        image: user.image,
        point: user.point
      };

      userModel.create(newUser,(err,data) => {
        if(err){
          callback(err);
        } else {
          callback(null,data);
        }
      });
    });
  } else {
    console.log("user already exist!");
    userModel.findOne({userid:user.userid});
  }
}

const deleteUser = (id, callback) => {
  userModel.remove({_id:id},(err,data) =>{
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(data);
      callback(err,data);
    }
  });
}

const deleteUserByUserId = (userid,callback) => {
  userModel.remove({userid:userid},(err,data) =>{
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(data);
      callback(err,data);
    }
  });
}

const updatePoint = (id,points,callback) => {
  getUserById(id,(err,data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      data.points += points;
      data.save((err,updateData) => {
        if(err){
          console.log(err);
          callback(err);
        } else {
          console.log(updateData);
          callback(null,updateData);
        }
      });
    }
  });

}


module.exports = {
  getAllUser,
  getUserById,
  checkUser,
  login,
  createUser,
  deleteUser,
  deleteUserByUserId,
  updatePoint
}
