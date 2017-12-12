const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

//tao mot user moi
router.post('/',(req,res) => {
  userController.createUser(req.body,(err,data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

// xoa mot user theo id mongoose
router.delete('/delete/:id',(req,res) => {
  userController.deleteUser(req.params.id,(err,data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send({"message":"delete succesful!"})
    }
  });
})

// xoa mot user theo userid mongoose
router.delete('/deleteUserByUserid/:id',(req,res) => {
  userController.deleteUserByUserId(req.params.id,(err,data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send({"message":"delete succesful!"});
    }
  });
})

//lay toan bo user
router.get('/', (req, res) => {
  userController.getAllUser((err,data) => {
    if(err){
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})

// login user
router.get('/login/:id',(req,res) => {
  userController.login(req.params.id,(err,data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})


//lay thong tin user
router.get('/:id',(req, res) => {
  userController.getUserById(req.params.id,(err,data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})

module.exports = router;
