const express=require('express');
const router=express.Router();
const toolController=require('../controller/toolController');



router.route('/sendMail').post(toolController.sendMail)
module.exports = router;