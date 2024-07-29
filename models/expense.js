const mongoose = require('mongoose');

const splitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  }
});

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  splitMethod: {
    type: String,
    required: true,
    enum: ['equal', 'exact', 'percentage']
  },
  splits: [splitSchema]
});

module.exports = mongoose.model('Expense', expenseSchema);
