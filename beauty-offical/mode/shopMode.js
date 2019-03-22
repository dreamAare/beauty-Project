const db=require('../DB/dbConfig');
module.exports={
    Fn:function () {
    },
    shopType:function (params,cb) {
        let sql='';
        if(params.length==3){
            sql='SELECT * FROM `products` WHERE `category_id`=?;SELECT `color_value`, pc.`product_id`,color_id FROM `pro_color` pc JOIN `products` p ON pc.`product_id`=p.`product_id`;SELECT * FROM `products` ORDER BY RAND() LIMIT 5;SELECT * FROM `category_child` WHERE `category_id` =?;SELECT * FROM `filter` WHERE `category_id` =?;SELECT COUNT(*) linecount FROM(SELECT DISTINCT lineid  FROM `filter` ) newtable;select * from `wish`';
        }else if(params.length==4){
           sql ='SELECT * FROM `products` WHERE `category_id`=?;SELECT `color_value`, pc.`product_id`,color_id FROM `pro_color` pc JOIN `products` p ON pc.`product_id`=p.`product_id`;SELECT * FROM `products` ORDER BY RAND() LIMIT 5;SELECT * FROM `category_child` WHERE `category_id` =?;SELECT * FROM `filter` WHERE `category_id` =?;SELECT COUNT(*) linecount FROM(SELECT DISTINCT lineid  FROM `filter` ) newtable;select * from `wish` where user_id=?';
        }
        db.connection(sql,params,cb);
    },
    getcolor:function (params,cb) {
        let sql= 'SELECT `color_value` FROM `pro_color` WHERE `product_id` =?';
        db.connection(sql,params,cb);
    },
    changetype:function (params,cb) {
        let sql='SELECT * FROM `products` WHERE `category_id` =? AND `category_child_Id` =?;SELECT `color_value`, pc.`product_id` FROM `pro_color` pc JOIN `products` p ON pc.`product_id`=p.`product_id` WHERE `category_id` =? AND `category_child_Id` =?;';
        db.connection(sql,params,cb);
    },  
    shopbestsale:function (params,cb) {
        let sql='SELECT * FROM `products` WHERE `category_id` =? ORDER BY RAND() LIMIT 8;SELECT `color_value`, pc.`product_id` FROM `pro_color` pc JOIN `products` p ON pc.`product_id`=p.`product_id` WHERE `category_id` =?;';
        db.connection(sql,params,cb);
    },
    highTolow:function (params,cb) {
        let sql='SELECT * FROM `products` WHERE `category_id` =? ORDER BY `price` DESC;SELECT `color_value`, pc.`product_id` FROM `pro_color` pc JOIN `products` p ON pc.`product_id`=p.`product_id` WHERE `category_id` =?;';
        db.connection(sql,params,cb);
    },
    lowTohigh:function (params,cb) {
        let sql='SELECT * FROM `products` WHERE `category_id` =? ORDER BY `price`;SELECT `color_value`, pc.`product_id` FROM `pro_color` pc JOIN `products` p ON pc.`product_id`=p.`product_id` WHERE `category_id` =?;';
        db.connection(sql,params,cb);
    },
    markbest:function (params,cb) {
        let sql='SELECT * FROM `products` WHERE `category_id` =? ORDER BY `star` desc;SELECT `color_value`, pc.`product_id` FROM `pro_color` pc JOIN `products` p ON pc.`product_id`=p.`product_id` WHERE `category_id` =?;';
        db.connection(sql,params,cb);
    },
    shopshow:function (params,cb) {
        let sql='SELECT * FROM `products` WHERE `product_id`=?;SELECT `product_id`,`color_name`,`color_value`,`color_id` FROM `pro_color` WHERE `product_id` =?;SELECT `pic_path` FROM `bigpicpath` WHERE `product_id` =? AND `wahtitis`=1;SELECT `pic_path` FROM `bigpicpath` WHERE `product_id` =? AND `motd`=1;SELECT cp.`color_id`,`color_pic_path` FROM `color_pic` cp JOIN `pro_color` pc ON cp.`color_id`=pc.`color_id` WHERE `product_id`=? ORDER BY `color_id`;SELECT * FROM `review` WHERE `product_id` =?;SELECT * FROM `pro_color` WHERE `color_id` IN(SELECT `color_id` FROM `review` WHERE `product_id`=?);';
        db.connection(sql,params,cb);
    },
    getcolorImg:function (params,cb) {
        let sql='SELECT `color_pic_path`, `color_value`,`color_name` FROM `color_pic` cp JOIN `pro_color` pc ON cp.`color_id`=pc.`color_id` WHERE cp.`color_id`=?';
        db.connection(sql,params,cb);
    },

    fliterproduct:function (params,cb) {
        let sql='SELECT * FROM `products` WHERE  `category_id`=?';
        for (var i=0;i<params.length-2;i++){
            sql+=' and `pro_attribute` LIKE(?)';
        }
        sql+=';SELECT `color_value`, pc.`product_id` FROM `pro_color` pc JOIN `products` p ON pc.`product_id`=p.`product_id` WHERE `category_id` =?;'
        console.log(sql);
        db.connection(sql,params,cb);
    },

    review:function (params,cb) {
        let sql='INSERT INTO `review` VALUE(NULL,?,?,?,?,?,?,?,?);';
        db.connection(sql,params,cb);
    },
    addToCar:function (params,n,cb) {
        let sql='INSERT INTO shopping_car (`user_id`,`product_id`,`color_id`,`quantity`) VALUES(?,?,?,?)';
        for(var i=0;i<n-1;i++){
            sql+=',(?,?,?,?)'
        }
        sql+='ON DUPLICATE KEY UPDATE `quantity`=`quantity`+VALUES(`quantity`),`user_id`=VALUES(`user_id`),`product_id`=VALUES(`product_id`),`color_id`=VALUES(`color_id`)';
        db.connection(sql,params,cb);
    },
    addToWish:function (params,cb) {
        let sql='SELECT COUNT(*) n FROM `wish` WHERE `product_id`=? AND `user_id` =?';
        db.connection(sql,params,function (err,data) {
            let newsql='';
            if (data){
                if (data[0].n>0){
                    newsql='DELETE FROM `wish` WHERE `product_id` =? AND `user_id` =?'
                }
                else{
                    newsql='INSERT INTO `wish` VALUES(NULL,?,?,NULL);';
                }
                db.connection(newsql,params,cb);
            }
        })
    },
    addToCar2:function (params,cb) {
        let sql='insert into shopping_car values(null,?,?,?,1)';
        db.connection(sql,params,cb)
    }
};

