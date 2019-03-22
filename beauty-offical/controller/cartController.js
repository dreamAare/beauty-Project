const cartMode=require('../mode/cartMode');
const fs=require('fs');
const path=require('path')

const multiparty=require('multiparty');
// var multipartMiddleware = multiparty();
// const paths=require('path')

module.exports={
    getCarList:function (req,res) {
        // console.log(req.session.user)
        let params=[];
        let user_id=req.body.user_id;
        // console.log(user_id);
        if(user_id!=null){
             params=[user_id,user_id,user_id,user_id,user_id];
        }
        function listCb(err,data) {
           /*    console.log(err);
                console.log(data);*/
                if(data.length==0){
                    res.json([])
                }else{
                    res.json(data);
                }
        }
        cartMode.getList(listCb,params)
    },

    deleteCar:function (req,res) {
        console.log(req.body.reqDataArr)
        var reqdataArr = req.body.reqDataArr;
        if (typeof reqdataArr =='string'){
            reqdataArr = parseInt(reqdataArr)
            reqdataArr = [reqdataArr];
        }
        var param =[];
        for (let i=0;i<reqdataArr.length;i++)
        {
            param.push(reqdataArr[i])
        }
      /*  console.log(param)
        console.log(param.length)*/
        function cb(err,data) {
            if (!err){
                // console.log(data)
                res.json({'result':200})
            } else {
                console.log(err)
                res.json({'result':-200})
            }
        }
        cartMode.deleteCarDB(param,cb)
    },

    addcheck : function (req,res) {
        var user_id=req.session.user.user_id;
        // console.log(req.body.myreqDataArr)
        var param =[user_id];
        for (let i=0;i<req.body.myreqDataArr.length;i++)
        {
            param.push(req.body.myreqDataArr[i])
        }

        // console.log(param)
        function cb(err,data) {
            if (!err){
                // console.log(data)
                res.json({'result':200})
            } else {
                console.log(err)
                res.json({'result':-200})
            }
        }
        cartMode.addcheckDB(param,cb)
    },

    modalCarList : function (req,res) {
        let user_id = req.session.user.user_id;
        let param =[user_id]
        function cb(err,data) {
            if (!err){
                // console.log(data)
                res.json({'result':200,'data':data,'msg':'查询数据成功'})
            } else {
                console.log(err)
                res.json({'result':-200,'data':false,'msg':'查询数据失败'})
            }
        }
        cartMode.modalCarListDB(param,cb)
    },

    udCarList : function (req,res) {
        var user_id=req.session.user.user_id;
        var param = [user_id];
        var delArr = req.body.deleteArr;
        var updataArr = req.body.updataArr;

        if (typeof delArr =='string'){
            delArr = parseInt(delArr)
            delArr = [delArr];
        }
        //该数组是为了与后台查出的数据 进行对比， 看是进行删除操作还是执行更新操作
        var findDataArr=[];
        for(var m=0;m<updataArr.length/2;m++){
            findDataArr[m] = {'carId':updataArr[m*2],'quantity':updataArr[m*2+1]}
        }
        // console.log(delArr)
        // console.log(updataArr)
        // console.log(findDataArr)

        function cb(err,data) {
            if(!err){
                var delParam = [];
                var upParam =[];
                // console.log(data)
                // console.log(data[0].car_id,data[0].quantity)
                for(var i=0;i<data.length;i++){
                    for (var j=0;j<findDataArr.length;j++){
                        if(findDataArr[j].carId==data[i].car_id){ //代表同一个商品
                            if(findDataArr[j].quantity>=data[i].quantity){

                                delParam.push(findDataArr[j].carId)
                                //对购物车表进行删除操作
                                function delcarCb(err,data) {
                                    console.log(data)
                                    if (!err){
                                        console.log('删除成功')
                                        // return res.json({'result':200,'msg':'删除成功'})
                                    } else {
                                        // return res.json({'result':-200,'msg':'删除失败'})
                                    }
                                }
                            } else {
                                upParam.push((data[i].quantity-findDataArr[j].quantity),findDataArr[j].carId)
                                //对购物车进行修改操作
                                function upcarCb(err,data) {
                                    if (!err){
                                        console.log('跟新成功')
                                        // return res.json({'result':200,'msg':'跟新成功'})
                                    } else {
                                        // return res.json({'result':-200,'msg':'跟新失败'})
                                    }
                                }
                            }
                        }
                    }
                }
                // console.log(delParam)
                // console.log(upParam)
                cartMode.delcarDB(delParam,delcarCb)
                cartMode.upcarDB(upParam,upcarCb)
                res.json({'result':200,'msg':'删除或者更新操作成功'})
            }else {
                console.log(err)
                res.json({'result':-200,'msg':'查询数据失败'})
            }
        }
        cartMode.udCarListDB(param,cb)
    },

    addorder : function (req,res) {
        var param = req.body.orderArr;
        console.log('param:' + param)
        function cb(err,data) {
            if (!err){
                res.json({'result':200,'msg':'插入成功'})
            } else {
                res.json({'result':-200,'msg':'插入失败'})
                console.log(err)
            }
        }
        cartMode.addorderDB(param,cb)
    },

    //支付方式图片上传
    uploadPic: function (req,res) {
        // 解析formData传过来的数据
        var ImgFile = new multiparty.Form();
        // 设置编码格式
            ImgFile.encoding = 'utf-8';
            //把我们要存储的路径放在一个变量中
            var uploadImgPath = path.join(__dirname, '../dist/img/uploadImg');
            // console.log('join路径片段::',uploadImgPath);
            //修改图片的存储地址
            ImgFile.uploadDir = uploadImgPath;
            //设置单文件的大小限制
            ImgFile.maxFilesSize = 2 * 1024 * 1024;
            // form.maxFields=1000;

        // 利用parse()方法来解析。方法接收两个参数，无返回值。第一个参数为request对象，把创建服务时，回掉函数中的第一个参数传进去就可以。第二个参数是cb，一个回掉函数，通过该回掉函数，可以获取到解析后的数据。

            ImgFile.parse(req, function (err, fields, files) {
                if (err) {
                    res.send({
                        status: -200,
                        msg: '上传失败'
                    });
                }
                // console.log('flies:',files)
                var filePath = files.files[0].path;
                var arr = filePath.split('\\');
                var fileName = arr[arr.length - 1];
                res.json({
                    status: '200',
                    imageUrl:'http://localhost:3100/img/uploadImg/' + fileName
                })
      })
    },

    ensureUpLoad:function (req,res) {
        let pay_name=req.body.pay_name;
        let pay_status=req.body.pay_status;
        let pay_desc=req.body.pay_desc;
        let pic_path=req.body.pic_path;
        let params=[pay_name,pic_path,pay_status,pay_desc];
        function cb(err,data){
            if(err){
                console.log(err)
            }else{
                res.send('ok')
            }
        }
        cartMode.addPic(params,cb)
    }
}
