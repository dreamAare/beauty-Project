const db=require('../DB/dbConfig');
module.exports={
    Fn:function () {

    },
    selectImg: function (cb,param) {
        let sql = 'SELECT * FROM slideImg WHERE si_pageid=1 AND si_moduleid=1;\n' +
                  'SELECT * FROM slideImg WHERE si_pageid=1 AND si_moduleid=2;\n' +
                  'SELECT * FROM slideImg WHERE si_pageid=1 AND si_moduleid=3;';
        db.connection(sql,param,cb)
    },
    uploadMode:function (cb,param) {
        var sql = 'UPDATE slideimg SET si_src=? WHERE si_id=?'
        db.connection(sql,param,cb)
    }
};
