const express=require('express');
const router=express.Router();
const multer = require('multer');
const upload = multer({dest: 'tempUpload/'})
const indexController=require('../controller/indexController');
router.route('/').post(indexController.Fn).get(indexController.Fn);
router.route('/slideImg')
    .post(indexController.Fn)
    .get(indexController.imgList);

router.route('/imgUpload')
    .post(upload.single('photo'),indexController.uploadController)

module.exports=router;
