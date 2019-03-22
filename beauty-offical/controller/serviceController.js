const indexMode=require('../mode/serviceMode');
module.exports={
    Fn:function (req,res) {
        res.send('ok!');
    },
    eyebrowBar:function (req,res) {
       function cb(err,data) {
         if (err == null && data.length >= 0){
           res.render('eyebrowBar.ejs',{list:data});
         }
       }
       indexMode.eyebrowBar(cb)
    },

    private:function (req,res) {
        res.render('private.ejs');
    },

    userCenter:function (req,res) {
        res.render('userCenter.ejs');
    },

    findStore:function (req,res) {
        res.render('findStore.ejs');
    },

    information:function (req,res) {
        res.render('information.ejs');
    },

    vip:function (req,res) {
        res.render('vip.ejs');
    },

    normalQuestion:function (req,res) {
        res.render('normalQuestion.ejs');
    },

    contactUs:function (req,res) {
        res.render('contactUs.ejs');
    },

    shoppingGuide:function (req,res) {
        res.render('shoppingGuide.ejs');
    },
};