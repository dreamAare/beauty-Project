const eventMode = require('../mode/eventMode');
const multiparty = require('multiparty');
const path = require('path');
module.exports = {
    Fn: function (req, res) {
        res.send('ok!');
    },
    getEventList: function (req, res) {
        /*  let id=req.params.id;*/
        let cb = function (err, data) {
            if (err) {
                console.log(err)
            }
            else if (data) {
                let obj = {'eventlist': data}
                res.render('event', obj)
            }
        };
        eventMode.getList(cb)
    },
    getEventDetail: function (req, res) {
        /*  let id=req.params.id;*/

        res.render('eventDetail', {})

    },
    addActivity: function (req, res) {

        var ImgFile = new multiparty.Form();
        ImgFile.encoding = 'utf-8';
        var uploadImgPath = path.join(__dirname, '../dist/img/uploadImg');
        ImgFile.uploadDir = uploadImgPath;

        //设置单文件的大小限制
        ImgFile.maxFilesSize = 2 * 1024 * 1024;
        let cb=function(err,data){
            if(data){
                res.json({
                    code:200
                })
            }
        }

        ImgFile.parse(req, function (err, fields, files) {
            console.log(files)
            console.log(fields)
            var filePath=files.file[0].path;
            var arr=filePath.split('\\');
            var fileName='img/uploadImg/'+arr[arr.length-1];
            eventMode.addActivity([fields.news_title,fields.news_time,fields.news_desc,fileName],cb)
        })

    }
};