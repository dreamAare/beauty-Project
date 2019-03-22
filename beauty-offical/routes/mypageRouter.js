const express=require('express');
const router=express.Router();
const mypageController=require('../controller/mypageController');
router.route('/list/:id').get(mypageController.Fn);

router.route('/checkLogin')
    .post(mypageController.checkLogin);

router.route('/timeChoose')
    .post(mypageController.timeChoose);

router.route('/selectHistory')
    .post(mypageController.selectHistory);

router.route('/updatePassword')
    .post(mypageController.updatePassword);

router.route('/getCountOrderPage')
    .post(mypageController.getCountOrderPage);

router.route('/currentPage')
    .post(mypageController.currentPage);
module.exports=router;