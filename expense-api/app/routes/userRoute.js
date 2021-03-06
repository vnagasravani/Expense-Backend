const express = require ('express');
const userController = require('./../controllers/UserController');
const authmw = require('./../middleware/authMiddleWare')

let setRouter = (app)=>{
  app.post('/signup', userController.signUp);
  app.post('/login',userController.login);
  app.post('/all', authmw.isAuthorised, userController.getAllUser);
  app.get('/user/:id',authmw.isAuthorised,userController.getSingleUser);
  app.post('/resetpassword',userController.resetPasswordFunction);
  app.post('/updatepassword',userController.updatePasswordFunction);
  app.post('/delete/:userId',userController.deleteUser);
  app.put('/edit/:userId',userController.editUser);
  app.post('/out',authmw.isAuthorised,userController.logout );

}

module.exports={
    setRouter:setRouter
}
