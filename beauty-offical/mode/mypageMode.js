const db=require('../DB/dbConfig');
module.exports={
    Fn:function () {

    },
    getCarList:function (cb,params) {
        let sql='SELECT *\n' +
            'FROM shopping_car a JOIN products b ON a.`product_id`=b.product_id\n' +
            'JOIN pro_color c ON a.color_id=c.color_id  \n' +
            'WHERE b.`product_id`=c.`product_id` AND  a.user_id=?';
        db.connection(sql,params,cb);
    },
    getWishList:function (cb,params) {
        let sql='SELECT *\n' +
            'FROM products a\n' +
            'WHERE a.`product_id`IN(SELECT b.product_id FROM wish b WHERE b.`user_id`=?)\n;' +
            'SELECT a.color_value,a.`product_id`\n' +
            'FROM pro_color a\n' +
            'WHERE a.`product_id`IN(SELECT b.product_id FROM products b\n' +
            'WHERE b.`product_id`IN(SELECT c.product_id FROM wish c WHERE c.`user_id`=?))\n';
        db.connection(sql,params,cb);
    },
    getOrderList:function (cb,params) {
        let sql='SELECT *\n' +
            'FROM orderlist a JOIN products b ON a.`product_id`=b.product_id\n' +
            'JOIN pro_color c ON a.color_id=c.color_id\n' +
            'WHERE a.user_id=?';
        db.connection(sql,params,cb);
    },
    getPurchaseHistory:function (cb,params) {
        let sql='SELECT *\n' +
            'FROM orderlist a JOIN products b ON a.`product_id`=b.product_id\n' +
            'JOIN pro_color c ON a.color_id=c.color_id JOIN category_p d\n' +
            'ON d.category_id=b.category_id\n' +
            'WHERE a.STATUS=\'交付成功\' AND a.user_id=2';
        db.connection(sql,params,cb);
    },
    getCheckListDB : function (cb,params) {
        let sql = 'select * from mycheck where user_id=?;' +
            'select * from transportation;' +
            'select * from pay'
        db.connection(sql, params, cb)
    },
    timeChoose:function (cb,params) {
        let sql='';
         if(params.length==3){
             sql='SELECT *\n' +
                 ' FROM orderlist a JOIN products b ON a.`product_id`=b.product_id\n' +
                 ' JOIN pro_color c ON a.color_id=c.color_id JOIN category_p d \n' +
                 ' ON b.category_id=d.category_id\n' +
                 ' WHERE a.user_id=? and a.pay_time between ? and ?';
         }else{
             sql='SELECT *\n' +
                 ' FROM orderlist a JOIN products b ON a.`product_id`=b.product_id\n' +
                 ' JOIN pro_color c ON a.color_id=c.color_id JOIN category_p d \n' +
                 ' ON b.category_id=d.category_id\n' +
                 ' WHERE a.user_id=? and a.pay_time between ? and ? and a.STATUS=?';
         }
        db.connection(sql,params,cb);
    },
    selectHistory:function (cb,params) {
        let sql='SELECT *\n' +
            'FROM orderlist a JOIN products b ON a.`product_id`=b.product_id\n' +
            'JOIN pro_color c ON a.color_id=c.color_id JOIN category_p d\n' +
            'ON d.category_id=b.category_id\n' +
            'WHERE a.STATUS=\'已收货\' AND a.user_id=? AND a.pay_time BETWEEN ? AND ?\n';
        db.connection(sql,params,cb)
    },

    getReviewList:function (cb,params) {
        let sql=' SELECT *\n' +
            ' FROM review a JOIN products b ON a.`product_id`=b.product_id\n' +
            ' JOIN pro_color c ON a.color_id=c.color_id\n' +
            ' WHERE a.user_id=?';
        db.connection(sql,params,cb);
    },
    updatePassword:function (cb,params) {
        let sql='select * from user where user_id=?';
        db.connection(sql,params,cb);
    },

    updatePwd:function (cb,params) {
        let sql='update user set PASSWORD=? where user_id=?';
        db.connection(sql,params,cb);
    },

    getRecentList:function (cb) {
        let sql=' SELECT * FROM products LIMIT 10,10;' +
            ' SELECT * \n' +
            ' FROM pro_color a \n' +
            ' WHERE a.`product_id` IN(SELECT b.product_id FROM products b)\n' +
            ' AND a.product_id >=6';
        db.connection(sql,[],cb);
    },

    getOrderPage:function (params,cb) {
        let sql='select count(*) as page from orderlist where user_id=?';
        db.connection(sql,params,cb)
    },

    currentPage:function (params,cb) {
        let sql='SELECT *\n' +
            'FROM orderlist a JOIN products b ON a.`product_id`=b.product_id\n' +
            'JOIN pro_color c ON a.color_id=c.color_id\n' +
            'WHERE a.user_id=? limit ?,3';
        db.connection(sql,params,cb);
    }
};
