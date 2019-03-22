const toolMode=require('../mode/toolMode');
const nodeMailer=require('nodemailer')
module.exports={
    sendMail:function (req,res) {

        let toUser=req.body.toUser;
        let title=req.body.title;
        let content=req.body.content;

        const transporter=nodeMailer.createTransport({
            service:'qq',
            auth:{
                user:'550360233@qq.com',
                pass:'higgecyqxvlebeaf'
        }
        })


        //配置邮件内容
        let mailOptions={
            from:'用户反馈 <550360233@qq.com>',
            to:toUser,
            subject:title,
            text:content,
            html:'<p style="color: red">'+content+'</p>'
        }

        //发送邮件
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                res.send('邮件发送失败'+err)
            }
            else {
                res.render('contactUs')
            }

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    }
};