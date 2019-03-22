const db=require('../DB/dbConfig');
module.exports={
    registerDB:function (param,cb) {
        let sql='insert into user values(null,?,?,?,18040430326,?)';
        db.connection(sql,param,cb)
    },
    checkRepeatDB:function (param,cb) {
        let sql = 'select * from user where email=?';
        db.connection(sql,param,cb)
    },
    loginDB : function (param,cb) {
        let sql = 'select * from user where email=? and PASSWORD=?';
        db.connection(sql,param,cb)
    }
};