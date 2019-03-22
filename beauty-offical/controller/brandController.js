const brandMode=require('../mode/brandMode');
module.exports={
    Fn:function (req,res) {
        res.send('ok!');
    },
    brand:function (req,res) {
        res.render('brand.ejs')
    },
    brandinfo:function (req,res) {
        res.render('brandinfo.ejs')

    },
    studio:function (req,res) {
        res.render('studio.ejs')

    }
};