const express=require('express');
const router=express.Router();
const serviceController=require('../controller/serviceController');
router.route('/').post(serviceController.Fn).get(serviceController.Fn);
router.route('/eyebrowBar').post(serviceController.eyebrowBar).get(serviceController.eyebrowBar);
router.route('/private').post(serviceController.private).get(serviceController.private);
router.route('/userCenter').post(serviceController.userCenter).get(serviceController.userCenter);
router.route('/findStore').post(serviceController.findStore).get(serviceController.findStore);
router.route('/information').post(serviceController.information).get(serviceController.information);
router.route('/vip').post(serviceController.vip).get(serviceController.vip);
router.route('/normalQuestion').post(serviceController.normalQuestion).get(serviceController.normalQuestion);
router.route('/contactUs').post(serviceController.contactUs).get(serviceController.contactUs);
router.route('/shoppingGuide').post(serviceController.shoppingGuide).get(serviceController.shoppingGuide);

module.exports=router;