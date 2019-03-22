const indexMode=require('../mode/userMode');
module.exports= {
    register: function (req, res) {
        let name = req.body.name;
        let pass = req.body.pass;
        let email = req.body.email;
        let birth = req.body.birth;
        let param = [name, pass, email, birth];
        // console.log(param)
        function cb(err, data) {
            // console.log(err)
            if (!err) {
                res.json({'result': '200', 'msg': '操作成功'})
            } else {
                console.log(err)
                res.json({'result': '-200', 'msg': '操作失败'})
            }
        }

        indexMode.registerDB(param, cb)
    },
    checkRepeat: function (req,res) {
        let judgeEmail = req.body.judgeEmail;
        let param = [judgeEmail];
        function cb(err,data) {
            // console.log(err)
            if (!err&&data.length>=1){
                res.json({'result': '200', 'msg': '操作成功'})
            } else{
                res.json({'result': '-200', 'msg': '操作失败'})
            }
        }
        indexMode.checkRepeatDB(param,cb)
    },
    login : function (req,res) {
        let email = req.body.email;
        let pwd = req.body.pwd;
        var param = [email,pwd];
        function cb(err,data) {
            // console.log(err)
            if (!err&&data.length==1){
                // console.log(data)
                req.session.user = {'email':data[0].email,'pwd':data[0].PASSWORD,'userName': data[0].username,'user_id':data[0].user_id}
                res.json({'result': '200', 'msg': '操作成功'})
                // console.log(req.session.user)
            } else{
                res.json({'result': '-200', 'msg': '操作失败'})
            }
        }
        indexMode.loginDB(param,cb);
    },
    checkLogin : function (req,res) {
        // console.log(req.session.user)
        if (req.session.user){
            res.json({'result': '200', 'session':req.session.user,'msg':'已登录'})
        } else{
            res.json({'result': '-200', 'session':false,'msg':'未登录'})
        }
    },
    logout : function (req,res) {
        req.session.user = null;
        // console.log(req.session.user);
        res.json({'result' : '200','session':req.session.user,'msg':'退出成功'})
    }
}