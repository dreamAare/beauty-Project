const newAndBestMode=require('../mode/newAndBestMode');
// const indexMode=require('../mode/indexMode')
module.exports={
    Fn:function (req,res) {
        res.send('ok!');
    },
    lookbook:function (req,res) {
      res.render('lookbook.ejs');
    },
    rukbuk:function (req,res) {
      function cb(err,data) {
        if (err == null && data.length >= 0){
          res.render('rukbuk.ejs',{list:data});
        }
      }
      newAndBestMode.rukbuk(cb)
    },
    collection:function (req,res) {
        function cb(err, data) {
            if (!err) {
                res.render('colloection', {'data': data})
            } else {
                console.log(err)
            }
        }
        newAndBestMode.getCollectionList(cb)

    },
    best:function (req,res) {
        if(req.session.user){
            let user_id=req.session.user.user_id;
            params=[user_id];
            function cb(err,date) {
                if (!err) {
                    res.render('best',{'date':date})
                }else{
                    console.log(err)
                }
            }
            newAndBestMode.bestDB(params,cb)
        }else{
            params=[];
            function cb(err,date) {
                if (!err) {

                    res.render('best',{'date':date})

                }else{
                    console.log(err)
                }
            }
            newAndBestMode.bestDB(params,cb)
        }

    },
    privateLesson:function (req,res) {
        // let userId=req.session.user.user_id;
        let userId=2;
        let cb=function(err,data){
            if (err){
                console.log(err);
            }
            if (data){
                console.log(data);
                res.render('thewinners',{list:data});
            }
        };
        newAndBestMode.privateLesson([userId],cb);
    },
    newPro:function (req,res) {
        if(req.session.user){
            let user_id=req.session.user.user_id;
            let params=[user_id];
            function cb(err,data) {

                if (!err) {

                    res.render('newPro',{'data':data})
                }else{
                    console.log(err)
                }
            }
            newAndBestMode.newPro(params,cb)
        }else{
            let params=[];
            function cb(err,data) {
                console.log(data)
                if (!err) {

                    res.render('newPro',{'data':data})
                }else{
                    console.log(err)
                }
            }
            newAndBestMode.newPro(params,cb)
        }

    },

    motd:function (req,res) {
        res.render('MOTD');
    }

};