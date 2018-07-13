var gulp = require('gulp');
var server = require('gulp-webserver');
var path = require('path');
var fs = require('fs');
var url = require('url');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autofixer = require('gulp-autofixer');
var data = JSON.parse(data);
var data = [
    {
    	title:"满300减30",
    	img:"img/img1.jpg",
    	price:489
    },
    {
    	title:"满300减50",
    	img:"img/img2.jpg",
    	price:599
    },
    {
    	title:"3件8折",
    	img:"img/img3.jpg",
    	price:99
    },
    {
    	title:"满999减100",
    	img:"img/img4.jpg",
    	price:1299
    },
    {
    	title:"满五免一",
    	img:"img/img5.jpg",
    	price:39
    }
];
gulp.task('server',function(){
    gulp.src('src')
        .pipe(server({
            port:8788,
            middleware:function(req,res,next){
                var obj = url.parse(req.url,true);
                var pathname = obj.pathname;
                var query = obj.query;
                if(req.url === '/favicon.ico'){
                    return;
                }
                if(pathname === '/api/data'){
                    var newArr = data.filter(function(item){
                        return query.id === item.choose;
                    })
                    res.end(JSON.stringify(newArr));
                }else if (pathname === '/api/list'){
                    var newArr = data.filter(function(item){
                        return query.id === item.choose;
                    })
                    res.end(JSON.stringify(mewArr));
                }else{
                    pathname = pathname === '/' ? '/index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname,'src',pathname)));
                }
            }
        }))
})