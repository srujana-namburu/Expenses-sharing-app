const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController'); // Ensure the path is correct

// Route to add an expense
router.post('/', expenseController.addExpense);

// Route to retrieve individual user expenses
router.get('/user/:userId', expenseController.getUserExpenses);

// Route to retrieve overall expenses
router.get('/', expenseController.getAllExpenses);
 
// Route to download the balance sheet
router.get('/download', expenseController.downloadBalanceSheet);

module.exports = router;
