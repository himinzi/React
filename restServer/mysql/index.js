// mysql 모듈 로드
const mysql = require("mysql2");

// mysql 접속 정보
const conn = {
  host: "localhost", //192.168.56.1
  port: "3306",
  user: "hr",
  password: "hr",
  database: "restaurant",
  connectionLimit: 10,
};

// DB 커넥션 생성
let pool = mysql.createPool(conn);

const query = async (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }else{
        resolve(result);
      }
    }); // end of pool.query
  }); // end of Promise
} // end of query

module.exports = {pool, query};