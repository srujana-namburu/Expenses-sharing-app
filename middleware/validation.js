// src/middleware/validation.js
const { check, validationResult } = require('express-validator');

exports.validateUser = [
  check('email').isEmail().withMessage('Email is invalid'),
  check('name').not().isEmpty().withMessage('Name is required'),
  check('mobile').not().isEmpty().withMessage('Mobile number is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

exports.validateExpense = [
  check('amount').isNumeric().withMessage('Amount must be a number'),
  check('description').not().isEmpty().withMessage('Description is required'),
  check('splitMethod').isIn(['equal', 'exact', 'percentage']).withMessage('Invalid split method'),
  check('splits').isArray().withMessage('Splits must be an array'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
