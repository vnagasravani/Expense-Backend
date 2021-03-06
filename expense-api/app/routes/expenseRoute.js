const express = require ('express');
const expenseController = require('./../controllers/ExpenseController');
const authmw = require('./../middleware/authMiddleWare')

let setRouter = (app)=>{
  app.post('/creategroup',expenseController.groupFormation);
 // app.post('/createexpense',expenseController.expenseCreation);
  app.post('/getexpenses', authmw.isAuthorised,expenseController.getAllExpenses);
  app.get('/getgroup/:groupName', authmw.isAuthorised,expenseController.getSingleGroup);
  app.get('/getexpensehistory/:expenseId',expenseController.getExpenseHistory)
}

module.exports={
    setRouter:setRouter
}
