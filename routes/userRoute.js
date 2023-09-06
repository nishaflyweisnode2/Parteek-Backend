const express = require('express');
const router = express.Router();
const { register, login, getAllUsers, getUserById } = require('../controllers/userController');



router.post('/register', register);

router.post('/login', login);

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);


module.exports = router;
