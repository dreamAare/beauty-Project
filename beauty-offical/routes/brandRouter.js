const express=require('express');
const router=express.Router();
const brandController=require('../controller/brandController');
router.route('/').post(brandController.Fn).get(brandController.Fn);
//
router.route('/bd').post(brandController.brand).get(brandController.brand);
router.route('/brandinfo').post(brandController.brandinfo).get(brandController.brandinfo);
router.route('/studio').post(brandController.studio).get(brandController.studio);




module.exports=router;