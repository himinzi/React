// filename : mysql.js
// mysql 연결 및 쿼리 실행 테스트
const mysql = require('mysql2');

const conn ={ 
    host : "192.168.0.10",
    port : '3306',
    user : 'hr',
    password : 'hr',
    database :'test'
}

// DB 커넥션 생성
let pool = mysql.createPool(conn);
module.exports = pool; // db연결을 모듈화 시키기


// // 1. DB 접속 체크 (생략가능)
// connection.connect((err)=>{
//     if(err){
//         console.log('error connection'+err.stack);
//         return;
//     }
// });

//let connection = mysql.createConnection(conn);
//console.log(connection);

// // 2. SQL 실행
// sql = "SELECT * FROM customer";
// //sql = "UPDATE customer set name='' where "
// connection.query(sql, function(err,results, fields){
//     if(err){
//         console.log(err);
//     }
//     //3. 결과 처리
//     console.log(results);
// });

// // DB 접속 종료(비동기이지만 SQL이 모두 실행되면 종료)
// connection.end();
