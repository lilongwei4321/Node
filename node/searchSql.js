// //设置服务
// const http  = require('http');
// const hostname = '127.0.0.1';
// const port = 4000;
// //连接数据库
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: '192.168.3.197',
//   user: 'root',
//   password: '123456',
//   port: '3306',
//   database: 'test'
// })
// connection.connect();

// //查
// var jsonData = {};
// var sql = 'SELECT * FROM goods';
// connection.query(sql, function(err, data){
//   if(err){
//     jsonData = {
//       status: 404,
//       message: 'error'
//     }
//   }
//   jsonData = {
//     status: 200,
//     message: 'success',
//     data: data
//   }
// })

// http.createServer(function (req, res){
//   res.writeHead(200, {
//     'Content-Type': 'application/json;charset=utf-8',
//     'Access-Control-Allow-Credentials': true,
//     'Access-Control-Allow-Origin': '*'
//   })
//   var type = req.method;
//   if(type == 'GET'){
//     res.end(JSON.stringify(jsonData))
//   }
// }).listen(port, function(){
//   console.log('server is runing at port' + port)
// })

/**
*接收一个带参数的http请求
* 127.0.0.1:3000/http_get?name=小小沉沉&password=qwer
* 一般会有两次请求  另一次为http://127.0.0.1:3000/favicon.ico 这个是浏览器自动发起的请求，需要特殊处理
*
*/

//导入http模块

var http=require('http');
var util = require('util');

//导入url模块
var url=require('url');
//连接数据库
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '192.168.3.197',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'test'
})
connection.connect();
http.createServer(function(request,response){
    response.writeHead(200, {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*'
    });//设置response编码为utf-8

    //接收浏览器url
    var url_Obj=url.parse(request.url);

    //请求参数中有中文是推介，会自动处理中文问题,推介使用
    var url_Obj_Json=url.parse(request.url,true);
    var id = url_Obj_Json.query.id;
    if(request.method == 'GET'){
      var jsonData = {};
      var sql = 'SELECT * FROM goods where';
      sql+= id != undefined ? ' id='+id:' 1=1';
      connection.query(sql, function(err, data){
        if(err){
          jsonData = {
            status: 404,
            message: 'error'
          }
        }
        jsonData = {
          status: 200,
          message: 'success',
          data: data
        }
        response.end(JSON.stringify(jsonData));
      })
    }
}).listen(4000);