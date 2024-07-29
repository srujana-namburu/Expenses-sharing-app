const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { email, name, mobile } = req.body;
    const user = new User({ email, name, mobile });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
