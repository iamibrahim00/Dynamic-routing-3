const path = require('path')
const express= require('express');
const router = express.Router()
const rootDir = require('../helper/path')
const getContact =require('../controllers/contact')
const postControler =require('../controllers/contact')

router.get('/contact',getContact.getContactController);

router.post('/contact',postControler.postContactController)
module.exports = router  