const mongoose = require('mongoose');
const Expense = require('../models/expense');

exports.addExpense = async (req, res) => {
  try {
    const { amount, description, splitMethod, splits } = req.body;
    const processedSplits = splits.map(split => ({
      user: mongoose.Types.ObjectId(split.user),
      amount: split.amount
    }));
    const expense = new Expense({
      amount,
      description,
      splitMethod,
      splits: processedSplits
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserExpenses = async (req, res) => {
  try {
    const userId = req.params.userId;
    const expenses = await Expense.find({ "splits.user": userId });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.downloadBalanceSheet = async (req, res) => {
  // Implement the logic for downloading the balance sheet
};
