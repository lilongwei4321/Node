const http = require('http'); 　　　　　　　　　　//实例化“http”

const hostname = '127.0.0.1';
const port = 4000;
var jsonData = {
  status: 200,
  data: {
    'name': '孝感', 'job': 'Boss' 
  }
}
http.createServer(function (req, res) {
  // var pathStr = url.parse(req.url)
    res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
  })
  var type = req.method;
  if (type == 'GET') {
    
    res.end(JSON.stringify(jsonData))
  } else if (type == 'POST') {
    var str = '';
    req.on('data',function(chunk){
      str += chunk;
    })
     
    req.on('end',function(){
      var data = querystring.parse(str)
      console.log(data)
      if(data.name == "" || data.job == ""){
        res.end(JSON.stringify({'success':true,msg:'填写有误'}))
      }else{
        res.end(JSON.stringify({'success':false,msg:'添加成功'}))
      }
 
    })
  }
 
}).listen(port, function () {
  console.log('server is runing at port ' + port)
})