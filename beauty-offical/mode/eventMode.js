const db=require('../DB/dbConfig');
module.exports={
    Fn:function () {

    },
    getList:function (params,cb) {
        let sql='select * from news'
        db.connection(sql,params,cb);
    },
    addActivity:function (params,cb) {
        let sql='INSERT INTO news (news_title,news_desc,news_time,news_pic_path)VALUES(?,?,?,?)'
        db.connection(sql,params,cb);
    }


};