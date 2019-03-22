var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('express-session');
var logger = require('morgan');
var bodyParser = require('body-parser');
//handle request entity too large



/*引用router*/
var indexRouter = require('./routes/indexRouter');
var eventRouter = require('./routes/eventRouter');
var newAndBestRouter = require('./routes/newAndBestRouter');
var serviceRouter = require('./routes/serviceRouter');
var shopRouter = require('./routes/shopRouter');
var userRouter = require('./routes/userRouter');
var cartRouter = require('./routes/cartRouter');
var mypageRouter = require('./routes/mypageRouter');
var brandRouter = require('./routes/brandRouter');
var shopTypeRouter=require('./routes/shopTypeRouter');
var toolRouter=require('./routes/toolRouter');
var cmsShopRouter=require('./routes/cmsShopManage');
var uploadFileRouter=require('./routes/uploadFileRouter');


var app = express();

app.use(cookieParser({
    secret: '123456',// 密钥  MD5（123456）
    name: '_urlHead',// 如果没有明确name,使用connect.id来做cookie的name.
    cookie: {maxAge: 6000000},// maxAge: cookie的生命周期，以毫秒为单位；
    rolling: true,// 是否更新session-cookie失效时间；
    resave: true//重新保存
}));

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
// views engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist')));

/*应用router*/
app.use('/user', userRouter);
app.use('/index', indexRouter);
app.use('/event', eventRouter);
app.use('/newAndBest',newAndBestRouter);
app.use('/service', serviceRouter);
app.use('/shop', shopRouter);
app.use('/cart', cartRouter);
app.use('/myPage', mypageRouter);
app.use('/shoptype', shopTypeRouter);
app.use('/brand', brandRouter);
app.use(toolRouter);
app.use('/cmsShopRouter',cmsShopRouter);
app.use('/uploadFile',uploadFileRouter);
app.use('/',function (req,res) {
    res.send('hollow word!');
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err);
    console.log(err);
});
app.set('port', 3100);
app.listen(app.get('port'), function () {
    console.log('服务器运行中!,端口号为3100');
});