const shopMode=require('../mode/shopMode');
const fs=require('fs');
const Buffer=require('buffer').Buffer;
module.exports={
    Fn:function (req,res) {
        res.send('ok!');
    },

    shopType:function (req,res) {
        if(req.session.user){
            let user_id=req.session.user.user_id;
            let id=req.params.id;
            let cb=function (err,data) {
                if (err){
                    console.log(err);
                }
                else if (data){
                    // res.send('ok!');
                    console.log(data.length);
                    res.render('shopOfFace',{list:data});
                }

            };
            shopMode.shopType([id,id,id,user_id],cb);
        }else{
            let id=req.params.id;
            let cb=function (err,data) {
                if (err){
                    console.log(err);
                }
                else if (data){
                    // res.send('ok!');
                    console.log(data.length);
                    res.render('shopOfFace',{list:data});
                }

            };
            shopMode.shopType([id,id,id],cb);
        }

    },
    changetype:function (req,res) {
        let id=req.params.id;
        let a=Math.floor(parseInt(id)/10);
        let b=parseInt(id)%10;
        /*console.log(a+'&'+b);*/
        let cb=function (err,data) {
            /*console.log('ok!');*/
            if (err){
                console.log(err);
            }
            else if (data){
                console.log(data);
                res.json(data);
            }
        };
        shopMode.changetype([a,b,a,b],cb);
    },
    shopbestsale:function (req,res) {
        let id=req.body.id;
        let cb=function (err,data) {
            if (err){
                console.log(err);
            }
            if (data){
                res.json(data);
            }
        };
        shopMode.shopbestsale([id,id],cb);
    },
    highTolow:function (req,res) {
        let id=req.body.id;
        let cb=function (err,data) {
            if (err){
                console.log(err);
            }
            if (data){
                res.json(data);
            }
        };
        shopMode.highTolow([id,id],cb);
    },
    lowTohigh:function (req,res) {
        let id=req.body.id;
        let cb=function (err,data) {
            if (err){
                console.log(err);
            }
            if (data){
                res.json(data);
            }
        };
        shopMode.lowTohigh([id,id],cb);
        
    },
    markbest:function (req,res) {
        let id=req.body.id;
        let cb=function (err,data) {
            if (err){
                console.log(err);
            }
            if (data){
                res.json(data);
            }
        };
        shopMode.markbest([id,id],cb);
    },
    shopshow:function (req,res) {
        let id=req.query.productId;
        let cb=function (err,data) {
            if (err){
                console.log(err)
            }
            if (data){
                console.log(data);
                console.log(data.length);
                res.render('shopShow',{list:data});
            }
        };
        shopMode.shopshow([id,id,id,id,id,id,id],cb);
    },
    getcolorImg:function (req,res) {
        let colorId=req.body.color_id;
        let cb=function (err,data) {
            if (err){
                console.log(err);
            }
            if (data){
                res.json(data);
            }
        };
        shopMode.getcolorImg([colorId],cb);
    },

    fliterproduct:function (req,res) {
        let arr=req.body.arr;
        let categoryid=req.body.categoryid;
        console.log(arr);
        let newarr=arr.split('/');
        let params=[];
        params.push(categoryid);
        for (var i=0;i<newarr.length-1;i++){
            params.push('%'+newarr[i]+'%');
        }
        params.push(categoryid);
        console.log(params);
        let cb=function (err,data) {
            if (err){
                console.log(err);
            }
            if (data){
                console.log(data);
                res.json(data);
            }
        };
        shopMode.fliterproduct(params,cb);
    },

    review:function (req,res) {

        let product_id=req.body.produc_id;
        let color_id=req.body.color_id;
        let title=req.body.title;
        let content=req.body.content;
        let imgfile=req.body.imgfile;
        let star=req.body.star;
        let newImageData=imgfile.replace(/data:image\/png;base64,/,'').replace(/\s/g,'+');
        let buffer=Buffer.from(newImageData,'base64');
        let filename=new Date().getTime()+'_'+product_id+'.png';
        fs.writeFile('./dist/upload/review/'+filename,buffer,function (err) {
            if (err){
                console.log(err);
            }
        });
        let imgpath='upload/review/'+filename;
        let cb=function (err,data) {
            if (err){
                console.log(err);
                res.json({
                    result:'-200',
                    msg:'查询失败'
                })
            }
            if (data){
                res.json({
                    result:'200',
                    msg:'操作成功'
                })
            }
        };
        let date=(new Date().getFullYear())+'-'+(new Date().getMonth()+1)+'-'+(new Date().getDate());
        if (req.session.user){
            let userid=req.session.user.user_id;
            shopMode.review([userid,product_id,content,star,color_id,imgpath,title,date],cb);
        }
        else{
            res.json({
                result:'100',
                msg:'未登录'
            })
        }
    },
    addToWish:function (req,res) {
        let userId=req.body.userid;
        let productId=req.body.productId;
        console.log(userId);
        console.log(productId)
        let cb=function (err,data) {
            if (err){
                console.log(err);
                res.json({
                    result:-200,
                    msg:'操作失败'
                })
            }
            if (data){
                res.json({
                    result:200,
                    msg:'操作成功'
                });
            }
        };
        shopMode.addToWish([productId,userId],cb);

    },
    addToCar:function (req,res) {
        if (req.session.user){
            let userid=req.session.user.user_id;
            let product_id=req.body.product_id;
            let colorIdArr=req.body.colorIdArr;
            let numArr=req.body.numArr;
            let params=[];
            let newcolorIdArr=colorIdArr.split(',');
            let newnumArr=numArr.split(',');
            for (var i=0;i<newcolorIdArr.length;i++){
                params.push(userid);
                params.push(product_id);
                params.push(newcolorIdArr[i]);
                params.push(newnumArr[i]);
            }
            console.log(params);
            let cb =function (err,data) {
                if (err){
                    console.log(err);
                    res.json({
                        result:'-100',
                        msg:'查询失败'
                    })
                }
                if(data){
                    res.json({
                        result:'200',
                        msg:'成功'
                    })
                }

            };
            shopMode.addToCar(params,newcolorIdArr.length,cb);
        }
        else{
            res.json({
                result:'100',
                msg:'未登录'
            })
        }


    },
    addToCar2:function (req,res) {
        let user_id=req.body.userid;
        let product_id=req.body.productId;
        let color_id=req.body.colorId;
        params=[user_id,product_id,color_id];

        function carCb(err,data) {
            if(err==null && data){
                res.json({'result':1000})
            }else{
                res.json({'result':0})
            }
        }
        shopMode.addToCar2(params,carCb);
    }
};

