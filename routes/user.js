const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();


router.post('/user/add-user',userController.postUserDetails)

router.get('/user/get-user',userController.getUserDetails)

router.delete('/user/delete-user/:id',userController.deleteUserDetails)

router.put('/user/edit-user/:id',userController.updateUser)

module.exports = router  