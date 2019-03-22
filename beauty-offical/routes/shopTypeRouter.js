const express=require('express');
const router=express.Router();
const shopController=require('../controller/shopController');
router.route('/:id').post(shopController.changetype).get(shopController.changetype);
module.exports=router;