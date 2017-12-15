const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

//tao mot user moi va login
router.post('/',(req,res) => {
  userController.createUser(req.body,(err,data) => {
    if (err) {
      res.status(500).send({"message":err});
      console.log(err);
    } else {
      res.status(200).send(data);
      // res.render("main",{user:data});
      console.log(data);
    }
  })
})


module.exports = router;
