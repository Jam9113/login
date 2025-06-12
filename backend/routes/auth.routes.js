const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
 const User = require('../models/User');
  const bcrypt = require('bcrypt');
  const hashedPassword = await bcrypt.hash("password123", 10);

  const testUser = new User({
    name: "jam",
    email: "zoilonjam@gmail.com",
    department: "social services",
    username: "jam",
    password: hashedPassword
  });

  try {
    await testUser.save();
    res.send("Test user created.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to create test user.");
  }
});


router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/create-test-user', async (req, res) => {
 
module.exports = router;
