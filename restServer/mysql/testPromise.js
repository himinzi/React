const mysql = require("./index");
//const {query} = require("./index");

// insertInfo(customer={
//     id:6,
//     name:'e rul suga it na yo?',
//     email:'what?',
//     phone:'GIVE me a CALL!!!',
//     address: '어디레스?'
// });

selectAll();
//selectInfo(5)

// const selectAll = async () => { 이 경우는 hoisting 이 안 됨! 호출시 주의
//     const sql = "SELECT * FROM customer";
//     const result = await mysql.query(sql);
//     console.log(result);
// }

async function selectAll(){
    const sql = "SELECT * FROM customer";
    const result = await mysql.query(sql);
    console.log(result);
}


async function selectInfo(id){
    const sql = "SELECT * FROM customer where id = ?"
    const result = await mysql.query(sql, id);
    console.log(result);
}

async function insertInfo(customer={}){
    const sql = "INSERT INTO customer SET ?"
    const result = await mysql.query(sql, customer);
    console.log(result);
}



// mysql.query(sql)
//      .then(res -> console.log(res));