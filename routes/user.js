const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
router.get('/', userController.getUser);

router.get('/:id', userController.getuserById);

router.post('/', userController.addUser);

module.exports = router;
