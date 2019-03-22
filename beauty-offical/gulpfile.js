const gulp=require('gulp');
const browser=require('browser-sync').create('mySever');
const less=require('gulp-less');
var paths={
    html:{
        'src':'public/html/*.html',
        'dest':'dist/'
    },
    css:{
        'src':'public/css/*.css',
        'dest':'dist/'
    },
    js:{
        'src':'public/js/*.js',
        'dest':'dist/'
    },
    less:{
        'src':'public/less/*.less',
        'dest':'dist/css/'
    },
    img:{
        'src':'public/img/**',
        'dest':'dist/'
    },
    comm:{
        'src':'public/comm/**',
        'dest':'dist/'
    }
};
gulp.task('html',copyHtml);
gulp.task('js',copyJs);
gulp.task('css',copyCss);
gulp.task('less',manageLess);
gulp.task('img',manageImg);
gulp.task('comm',mannageComm);
function copyHtml(){
    return gulp.src(paths.html.src,{base:'public'})
        .pipe(gulp.dest(paths.html.dest));
}
function copyJs() {
    return gulp.src(paths.js.src,{base:'public'})
        .pipe(gulp.dest(paths.js.dest));
}
function copyCss() {
    return gulp.src(paths.css.src,{base:'public'})
        .pipe(gulp.dest(paths.css.dest));
}
function manageLess(){
    return gulp.src(paths.less.src)
        .pipe(less())
        .pipe(gulp.dest(paths.less.dest))
}
function mannageComm(){
    return gulp.src(paths.comm.src,{base:'public'})
        .pipe(gulp.dest(paths.comm.dest));
}
function manageImg(){
    return gulp.src(paths.img.src,{base:'public'})
        .pipe(gulp.dest(paths.img.dest));
}
let build=gulp.series('html','js','css','less');
gulp.task('build',build);
//监听
function watchChange(){
   /* return gulp.watch(['public/html/!*.html','public/css/!*.css','public/js/!*.js','!public/comm'],{base:'public'}).pipe(gulp.dest('dist/'));*/
    return gulp.watch(['public/html/*.html','public/css/*.css','public/js/*.js','public/less/*.less'],build);
}
gulp.task('watch',watchChange);



var bs=require('browser-sync').get('mySever');
gulp.task('browserFlash',browserFlashFn);
function browserFlashFn() {
    bs.init({
        server:{
            baseDir:'./dist'
        }
    });
    bs.watch(['public/html/*.html','public/css/*.css','public/js/*.js','public/less/*.less']).on('change',bs.reload);
}

