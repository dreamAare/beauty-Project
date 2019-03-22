const multiparty=require('multiparty');
const path=require('path');
const fs=require('fs');
module.exports={
  uploadImg(req,res){
    var ImgFile=new multiparty.Form();
    ImgFile.encoding='utf-8';
    var uploadImgPath=path.join(__dirname,'../dist/img/uploadImg');
    ImgFile.uploadDir=uploadImgPath;

    //设置单文件的大小限制
    ImgFile.maxFilesSize=2*1024*1024;
    // form.maxFields=1000;
    ImgFile.parse(req,function (err,fields,files) {
      if (err){
        console.log('错误',err);
        res.send({
          status:-200,
          msg:'上传失败'
        });
        return;
      }
      var filePath=files.file[0].path;
      var arr=filePath.split('\\');
      var fileName=arr[arr.length-1];
      res.json({
        status:'200',
        imgUrl:'/img/uploadImg/'+fileName
      });
    })
  }
}