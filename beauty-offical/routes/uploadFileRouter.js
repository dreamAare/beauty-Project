const express=require('express');
const router=express.Router();
const uploadFileController=require('../controller/uploadFileController');
router.route('/uploadImg').post(uploadFileController.uploadImg);

module.exports=router;