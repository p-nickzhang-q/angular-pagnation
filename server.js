/*
* @Author: Administrator
* @Date:   2018-04-26 17:16:23
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-26 17:25:53
*/
const express = require('express');
const expressStatic = require('express-static');
const bodayParser = require('body-parser');
const consolidate = require('consolidate');
const multer = require('multer');

var server = express();
server.listen(8080);

//post数据
server.use(bodayParser.urlencoded({ extended: false }));
//接受接送数据
server.use(bodayParser.json());
server.use(multer({ dest: './static/upload/' }).any());

//配置模板引擎

// 输出什么东西
server.set('view engine', 'html');
// 模板文件放在哪，
server.set('views', './web');
// 用哪种模板引擎，
server.engine('html', consolidate.ejs);

//route
server.get('/', function(req, res) {
    res.render('index.html');
});

//需要特殊处理的访问放在前面，不然特殊处理的访问也会走到公共访问,就会造成特殊访问不到，因为公共访问里没有对应资源
server.use('/static/', expressStatic('static'));
server.use('/', expressStatic('web'));