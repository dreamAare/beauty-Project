const express=require('express');
const router=express.Router();
const newAndBestController=require('../controller/newAndBestController');
router.route('/').post(newAndBestController.Fn).get(newAndBestController.Fn);
// 陈啸
router.route('/lookbook').post(newAndBestController.lookbook).get(newAndBestController.lookbook);
router.route('/lookbook:1').post(newAndBestController.rukbuk).get(newAndBestController.rukbuk);
//陆丽嘱
router.route('/collection').post(newAndBestController.collection).get(newAndBestController.collection);

//张亮
router.route('/best').post(newAndBestController.best).get(newAndBestController.best);
router.route('/winner').post(newAndBestController.privateLesson).get(newAndBestController.privateLesson);
router.route('/MOTD').post(newAndBestController.motd).get(newAndBestController.motd);
router.route('/newPro').post(newAndBestController.newPro).get(newAndBestController.newPro);
module.exports=router;