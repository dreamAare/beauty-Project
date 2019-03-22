const mysql=require('mysql');

module.exports={
    config:{
        host:'192.168.3.253',
        user:'user',
        password:'123456',
        database:'espoir',
        port: 3306,
        multipleStatements: true
    },
    connection:function (req,param,cb) {
        let myConnection=mysql.createConnection(this.config);
        myConnection.connect();
        myConnection.query(req,param,cb);
        myConnection.end();
    }
};
