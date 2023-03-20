const { Router } = require('express');
const express = require('express');

const ExprenseController = require('../controllers/expense');

const router = express.Router()


router.post('/expense/add-expense',ExprenseController.postExpense)

router.get('/expense/get-expense',ExprenseController.getExpense)

router.delete('/expense/delete-expense/:id',ExprenseController.deleteExpense)

router.patch('/expense/edit-expense',ExprenseController.editExpense)

module.exports = router