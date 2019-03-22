const indexMode=require('../mode/indexMode');
const fs = require('fs');
module.exports={
    Fn:function (req,res) {
        res.send('ok!');
    },
    imgList: function (req,res) {
        var param=[]
        function cb(err,data) {
            // console.log(data)
            if (!err){
                res.json(data)
            } else {
                console.log(err)
            }

        }
        indexMode.selectImg(cb,param)
    },
    uploadController: function (req, res) {
        // console.log(req.file)
        var si_id = req.body.si_id;
        var param = [];
        var oldpath = req.file.destination + req.file.filename;
        var newpath = 'dist/img/imgIndex/' + req.file.originalname;
        fs.rename(oldpath, newpath, function (err) {
            if (err) {
                throw err
            } else {
                console.log(newpath)
                var sqlFileName = newpath.replace('dist','http://192.168.3.243:3100')
                param.push(sqlFileName)
                param.push(si_id)
                console.log(param)
                function cb(err, data) {
                    if (err == null) {
                        res.send(sqlFileName)
                    } else {
                        res.send()
                    }
                }
                indexMode.uploadMode(cb,param)
            }
        })
    }
};
