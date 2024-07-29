const express = require('express');
const { createUser, getUserDetails } = require('../controllers/userController');
const { validateUser } = require('../middleware/validation');

const router = express.Router();

router.post('/users', validateUser, createUser);
router.get('/users/:id', getUserDetails);

module.exports = router;
