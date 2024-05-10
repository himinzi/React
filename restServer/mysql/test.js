// test.js
const {pool} = require("./index"); // 객체로 보냈을 때는 객체 안에서 pool만 분리 해야 됨 

selectAll();
//selectInfo(2);
//insert();
//update(3);
//del(4);

// 단건조회
function selectInfo(id){
    const sql = "SELECT * FROM customer where id=? ";
    pool.query(sql, id, (err, result)=>{ // sql 옆에 매개변수(2개면 배열로 묶어서!)
        if(err){
            console.log(err);
        }
        console.log(result);
    })
}

// 고객 추가
function insert(){
    const sql ="insert into customer set ?";
    const customer = { id:'5', name:'hungry', phone:'secret', address:'안알랴줌', email:'eeee'};
    pool.query(sql, customer,  (err, result)=>{ 
        if(err){
            console.log(err);
        }
        console.log(result);
    })
}

// 수정
function update(id){
    const sql = "update customer set ? where id=?";
    const customer = { name:'hu', phone:'ssql', address:'안ddd알랴줌', email:'eeddee'};
    pool.query(sql, [customer, id],  (err, result)=>{ // sql 옆에 매개변수(2개면 배열로 묶어서!), 순서대로
        if(err){
            console.log(err);
        }
        console.log(result.info);
    })
}

function del(id){
    const sql = "delete from customer where id=?"
    pool.query(sql, id, (err, result)=>{
        if(err){
            console.log(err);
        }
        console.log(result);
    })
}

// SQL 실행
function selectAll() {
    const sql = "SELECT * FROM customer";

    pool.query(sql, function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        //3. 결과 처리
        console.log(results);
    });
}