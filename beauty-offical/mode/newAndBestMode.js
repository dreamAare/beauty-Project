const db=require('../DB/dbConfig');
module.exports={
    Fn:function () {

    },
    bestDB:function (params,cb) {
        let sql='';
        if(params.length==1){
            sql='select * from products limit 0,8; select * from pro_color;' +
                'select a.color_value,a.product_id,color_id\n' +
                'from pro_color a join products b on a.product_id=b.product_id;' +
                'select * from wish where user_id=?'
        }else{
            sql='select * from products limit 0,8; select * from pro_color;' +
                'select a.color_value,a.product_id,color_id\n' +
                'from pro_color a join products b on a.product_id=b.product_id';
        }

        db.connection(sql,params,cb)
    },

    //collection
    getCollectionList:function (cb) {
        let sql='select * from products;';
        db.connection(sql,[],cb)
    },
    privateLesson:function (params,cb) {
        let sql='SELECT * FROM `products` ORDER BY RAND() LIMIT 20;select * from `wish` where user_id=?';
        db.connection(sql,params,cb);
},
    rukbuk:function (cb) {
      let sql = 'SELECT * FROM `products` ORDER BY RAND() LIMIT 3;SELECT * FROM `pro_color`';

      db.connection(sql,[],cb)
    },
    newPro:function (params,cb) {
        let sql='';
        if(params.length==1){
            sql='select * from products limit 0,8; select * from pro_color;' +
                '\n' +
                'select a.color_value,a.product_id,color_id\n' +
                'from pro_color a join products b on a.product_id=b.product_id;' +
                'select * from wish where user_id=?';
        }else{
            sql='select * from products limit 0,8; select * from pro_color;' +
                '\n' +
                'select a.color_value,a.product_id,color_id\n' +
                'from pro_color a join products b on a.product_id=b.product_id';
        }
        db.connection(sql,params,cb)
    },
};