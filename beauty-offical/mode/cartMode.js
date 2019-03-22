const db=require('../DB/dbConfig');
module.exports={
    getList:function (cb,params) {
        let sql='select count(*) as number from shopping_car where user_id=?;' +
            'select count(*) as number2 from wish where user_id=?;' +
            'select username from user where user_id=?;' +
            'select count(*) as number3 from orderlist where user_id=?;' +
            'select count(*) as number4 from orderlist where user_id=? and STATUS="运输中"';
        db.connection(sql,params,cb);
    },
    deleteCarDB:function (param,cb) {
        let sql ='DELETE FROM shopping_car WHERE 1=2 ';
        for(let i=0;i<param.length;i++){
            sql += 'OR car_id=? '
        }

        console.log(sql)
        db.connection(sql,param,cb)
    },
    addcheckDB :function (param,cb) {
        let sql ='DELETE FROM mycheck where user_id=?;INSERT INTO mycheck VALUES(?,?,?,?,?,?,?,?,?,?)';
        for (let i=0;i<((param.length-1)/10)-1;i++){
            sql += ',(?,?,?,?,?,?,?,?,?,?)'
        }
        // console.log(sql)

        db.connection(sql,param,cb)
    },
    modalCarListDB : function (param,cb) {
        let sql='SELECT *\n' +
            'FROM shopping_car a JOIN products b ON a.`product_id`=b.product_id\n' +
            'JOIN pro_color c ON b.product_id=c.product_id \n' +
            'WHERE a.color_id=c.color_id and a.user_id=?';
        db.connection(sql,param,cb)
    },

    udCarListDB : function (param,cb) {
        var sqlSelect = 'select * from shopping_car where user_id=?';
        db.connection(sqlSelect,param,cb)

    },
    delcarDB : function (param,cb) {
        var sqldelete ='DELETE FROM shopping_car WHERE 1=2 ';
        for(let i=0;i<param.length;i++){
            sqldelete += 'OR car_id=? '
        }

        // console.log(sqldelete)
        db.connection(sqldelete,param,cb)
    },
    upcarDB : function (param,cb) {
        if (param.length>0){
            var sqlUpdate = '';
            for (let i=0;i<param.length/2;i++) {
                sqlUpdate += 'UPDATE shopping_car SET quantity=? WHERE car_id=?;'
            }
            db.connection(sqlUpdate,param,cb)
        }
    },
    addorderDB : function (param,cb) {
        let sql ='delete from mycheck;INSERT INTO orderlist VALUES(null,?,?,?,?,?,"待发货",?)';
        for (let i=0;i<(param.length/6)-1;i++){
            sql += ',(null,?,?,?,?,?,"待发货",?)'
        }
        // console.log(sql)

        db.connection(sql,param,cb)
    },

    addPic:function (params,cb) {
        let sql='INSERT INTO pay(pay_name,pay_logoPath,pay_status,pay_desc)\n' +
            'VALUES(?,?,?,?) ON DUPLICATE KEY UPDATE pay_name=VALUES(pay_name),\n' +
            'pay_logoPath=VALUES(pay_logoPath),\n' +
            'pay_status=VALUES(pay_status),\n' +
            'pay_desc=VALUES(pay_desc)';
        db.connection(sql,params,cb)
    }
};
