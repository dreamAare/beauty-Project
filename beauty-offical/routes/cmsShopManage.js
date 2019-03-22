const express=require('express');
const cmsShopController=require('../controller/cmsShopController');
const router=express.Router();
router.route('/addShop').post(cmsShopController.addShop);
module.exports=router;