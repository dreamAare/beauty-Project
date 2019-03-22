const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');

router.route('/register').post(userController.register)
    .get();
router.route('/checkRepeat').post(userController.checkRepeat)
    .get();
router.route('/login').post(userController.login)
    .get();
router.route('/checkLogin').post(userController.checkLogin)
    .get();
router.route('/logout').post(userController.logout)
    .get();

module.exports=router;