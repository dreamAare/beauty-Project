const mypageMode=require('../mode/mypageMode');

module.exports={
    Fn:function (req,res) {
        let params=[];
        let sessionId=req.session.user;
        let id=parseInt(req.params.id);
        let title='';
        // console.log(id);
        let data1=[];
        let allData={};
        let headText='个人中心';
        if (sessionId){
            let user_id=sessionId.user_id;
            switch (id) {
                case 1:
                    return res.redirect('/html/myPage.html');
                case 2:
                    params=[user_id];
                    title='订单状态查询';
                    data1=[id,title,headText];
                    allData={data1};
                function getOrderList(err,data) {
                    if(data.length==0){
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }else{
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }
                }
                    mypageMode.getOrderList(getOrderList,params);
                    break;
                case 3:
                    params=[user_id];
                    title='购买历史';
                    data1=[id,title,headText];
                    allData={data1};
                    // console.log('12313123123123213')
                function getCb(err,data) {
                    if(data.length==0){
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }else{
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }
                }
                    mypageMode.getPurchaseHistory(getCb,params);
                    break;
                case 4:
                    title='优惠券';
                    data1=[id,title,headText];
                    allData={data1};
                    res.render('mypage_header.ejs',allData);
                    break;
                case 5:
                    params=[user_id,user_id];
                    title='愿望清单';
                    data1=[id,title,headText];
                    allData={data1};
                function wishCb(err,data){
                    if(data.length==0){
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }else{
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }
                }
                    mypageMode.getWishList(wishCb,params);
                    break;
                case 6:
                    /*          params=[user_id];*/
                    title='最近浏览';
                    data1=[id,title,headText];
                    allData={data1};
                function getRecent(err,data){
                    if(data.length==0){
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }else{
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }
                }
                    mypageMode.getRecentList(getRecent);
                    break;
                case 7:
                    params=[user_id];
                    title='我的评论';
                    data1=[id,title,headText];
                    allData={data1};
                function reviewCb(err,data){
                    if(data.length==0){
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }else{
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }
                }
                    mypageMode.getReviewList(reviewCb,params);
                    break;
                case 8:
                    params=[user_id];
                    title='我的信息';
                    data1=[id,title,headText];
                    allData={data1};
                function cb(err,data) {
                    if(data.length==0){
                        res.render('mypage_header.ejs',allData);
                    }else{
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }
                }
                    mypageMode.updatePassword(cb,params);
                    break;
                case 10:
                    params=[user_id];
                    title='购物车';
                    headText='购物车';
                    data1=[id,title,headText];
                    allData={data1};
                function car_cb(err,data){
                 /*   console.log(data.length)*/
                    if(data.length==0){
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }else{
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }
                }
                    /*获取购物车列表*/
                    mypageMode.getCarList(car_cb,params);
                    break;
                case 11:
                    params=[user_id,user_id];
                    title='愿望清单';
                    data1=[id,title,headText];
                    allData={data1};
                function wishCb(err,data){
                    if(data.length==0){
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }else{
                        allData={data1,data};
                        res.render('mypage_header.ejs',allData);
                    }
                }
                    mypageMode.getWishList(wishCb,params);
                    break;
                case 12:
                    params=[user_id];
                    title='查看';
                    headText='查看';
                    data1=[id,title,headText];
                    allData={data1};
                function cb(err,data) {
                    if (data.length == 0) {
                        res.render('mypage_header.ejs',allData);
                    } else {
                        allData = {data1, data};
                        // console.log('check的data：',data)
                        res.render('mypage_header.ejs', allData);
                    }
                }
                    mypageMode.getCheckListDB(cb,params);
                    break;
            }
        }
    },
    checkLogin : function (req,res) {
        // console.log(req.session.user)
        if (req.session.user){
            res.json({'result': '200', 'session':req.session.user,'msg':'已登录'})
        } else{
            res.json({'result': '-200', 'session':false,'msg':'未登录'})
        }
    },

    timeChoose:function (req,res) {
        let sessionId=req.session.user;
        let user_id=sessionId.user_id;
        let selectValue=req.body.selectValue;
        let date1=req.body.date1;
        let date2=req.body.date2;
        let params=[user_id];
        if(date1!=''){
            params.push(date1);
        }
        if(date2!=''){
            params.push(date2)
        }
        if(selectValue!=''){
            params.push(selectValue);
        }
        function cb(err,data) {
          /*  console.log(err);
            console.log(data)*/
            if(data.length==0){
                res.json('false');
            }else{
                res.json(data)
            }
        }
        mypageMode.timeChoose(cb,params);
    },

    selectHistory:function (req,res) {
        let sessionId=req.session.user;
        let user_id=sessionId.user_id;
        let date1=req.body.date1;
        let date2=req.body.date2;
        let params=[user_id];
        if(date1!=''){
            params.push(date1);
        }
        if(date2!=''){
            params.push(date2)
        }
      /*  console.log('params',params);*/
        function cb(err,data) {
            if(data.length==0){
                res.json('false');
            }else{
                res.json(data)
            }
        }
        mypageMode.selectHistory(cb,params);
    },

    updatePassword:function (req,res) {
        let sessionId=req.session.user;
        let user_id=sessionId.user_id;
        let params=[];
        let newPwd=req.body.newPwd;
        if(newPwd!=''){
            params.push(newPwd);
        }
        if(user_id!=''){
            params.push(user_id);
        }
        function cb(err,data) {
            if(data.length==0){
                res.send('0');
            }else{
                res.send('1');
            }
        }
        mypageMode.updatePwd(cb,params);
    },

    getCountOrderPage:function (req,res) {
        let user_id='';
        if(req.session.user){
         user_id=req.session.user.user_id;
        }
        let params=[user_id]
        function page(err,data) {
            // console.log(data[0].page);
            /*返回一个总页数*/
            let countPage=Math.ceil(data[0].page/3);
            if(!err&&data){
                res.json(countPage)
        }else{
                console.log(err);
            }
        }
        mypageMode.getOrderPage(params,page);
    },

    currentPage:function (req,res) {
        let user_id='';
        if(req.session.user){
          user_id=req.session.user.user_id;
        }

        let page=req.body.currentPage;
        //起始的索引下标
        page=(page-1)*3;
        let params=[user_id,page];
        function currentCb(err,data) {
            if(!err&&data.length>0){
                res.json(data);
            }else{
                console.log(err);
            }
        }
        mypageMode.currentPage(params,currentCb);
    }
};
