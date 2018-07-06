var mysql = require("mysql");
var connection = mysql.createConnection({
  host: '192.168.3.197',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'test'
})

connection.connect();


// //查
// var sql = 'SELECT * FROM goods';
// connection.query(sql, function(err, result){
//   if(err){
//     console.log('[SELECT ERROR] - ', err.message);
//     return;
//   }
//   console.log('--------------------------SELECT----------------------------');
//   console.log(result);
//   console.log('------------------------------------------------------------\n\n');
// });

//增
// var addSql = 'INSERT INTO goods(name) VALUES(?)';
// var addSqlParams = ['京东卡'];
// connection.query(addSql, addSqlParams, function(err, result){
//   if(err){
//     console.log('[INSERT ERROR] - ', err.message);
//     return;
//   }

//   console.log('----------------------INSERT--------------------');
//   console.log('INSERT ID:', result);
//   console.log('-----------------------------------------\n\n');
// })

//改
// var modSql = 'UPDATE goods SET name = ? WHERE Id = ?';
// var modSqlParams = ['华为手机', 1];
// connection.query(modSql, modSqlParams, function(err, result){
//   if(err){
//     console.log('[UPDATE ERROR] - ',err.message);
//     return;
//   }
//   console.log('--------------------------UPDATE----------------------------');
//   console.log('UPDATE affectedRows',result.affectedRows);
//   console.log('-----------------------------------------------------------------\n\n');
// })
//删
var delSql = 'DELETE FROM goods where id=1';
connection.query(delSql, function(err, result){
  if(err){
    console.log('[DELETE ERROR] - ', err.message);
    return
  }
  console.log('--------------------------DELETE----------------------------');
  console.log('DELETE affectedRows',result.affectedRows);
  console.log('-------------------------------------------------------\n\n');
})


connection.end();