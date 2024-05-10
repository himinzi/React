const express = require("express");
const router = express.Router();

const mysql = require("../mysql") 
// mysql으로 export를 받음 
//폴더까지만 적어줘도 index file을 찾아서 가져와 줌 

const sql ={
    customerList: "SELECT * FROM customer",
    customerInfo: 'SELECT * FROM customer where id = ?',
    insertCustomer : "INSERT INTO customer SET ?",
    updateCustomer : "UPDATE customer SET ? where id=?",
    deleteCustomer : "DELETE FROM customer where id=?"
}

// 전체 조회
router.get("/", async (req, res) => {
    const result = await mysql.query(sql.customerList); // callback 함수 사용법
    res.send(result);
});

// 단건 조회
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const result = await mysql.query(sql.customerInfo, id); // callback 함수 사용법
    res.send(result);
});

//등록
router.post("/", async (req, res) => {
    // const customer ={
    //     id: req.body.id,
    //     name: req.body.name,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //     address: req.body.address
    // }
    const result = await mysql.query(sql.insertCustomer, req.body); // callback 함수 사용법
    if(result.affectedRows == 1){
        res.send(true);
    }else{
        res.send(false);
    }
    //res.send(result);
});

//수정
router.put("/:id", async (req, res)=>{
    const id = req.params.id;
    const result = await mysql.query(sql.updateCustomer, [req.body, id]);
    res.send(result);
});

//삭제
router.delete("/:id", async function(req, res){
    const id = req.params.id;
    const result = await mysql.query(sql.deleteCustomer, id);
    res.send(result);
});

module.exports = router;