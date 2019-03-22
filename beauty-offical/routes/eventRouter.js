const express=require('express');
const router=express.Router();
const eventController=require('../controller/eventController');
router.route('/').post(eventController.Fn).get(eventController.Fn);
router.route('/event_main').post(eventController.getEventList).get(eventController.getEventList);
router.route('/event_main:1').post(eventController.getEventDetail).get(eventController.getEventDetail);
router.route('/addActivity').post(eventController.addActivity)
module.exports=router;