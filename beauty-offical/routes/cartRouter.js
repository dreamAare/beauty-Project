const express=require('express');
const router=express.Router();
const cartController=require('../controller/cartController');
// const upload = multer({dest: 'tempUpload/'})

router.route('/list')
    .post(cartController.getCarList);
//刘任志
router.route('/delete')
    .post(cartController.deleteCar);

router.route('/addcheck')
    .post(cartController.addcheck);

router.route('/modalCarList')
    .post(cartController.modalCarList)

router.route('/delcart')
    .post(cartController.udCarList)

router.route('/addorder')
    .post(cartController.addorder)


// 购物车的支付方式图片上传
router.route('/uploadPic')
    .post(cartController.uploadPic);

router.route('/uploadPic2')
    .post(cartController.ensureUpLoad);

module.exports=router;
