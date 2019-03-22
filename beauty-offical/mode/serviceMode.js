const db=require('../DB/dbConfig');
module.exports={
    Fn:function () {

    },
    eyebrowBar:function (cb) {
      let sql = 'SELECT * FROM `products` ORDER BY RAND() LIMIT 4;SELECT * FROM `pro_color`';

      db.connection(sql,[],cb)
    }

};