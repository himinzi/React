const express = require('express');
const router = express.Router();

const mysql = require("../mysql");

const sql ={
    boardList:"SELECT * FROM board",
    oneboard:"SELECT * FROM board WHERE id=?",
    insertBoard: "INSERT into board set ? ;",
    updateBoard: "UPDATE board SET ? WHERE id=?",
    deleteBoard: "DELETE FROM board WHERE id= ?"
}


  // 전체 
router.get("/", async(req, res)=>{
    const result = await mysql.query(sql.boardList);
    res.send(result);
  })

  // 단건
router.get("/:id", async(req, res)=>{
  const result = await mysql.query(sql.oneboard, req.params.id);
  res.send(result);
})
  
  //추가
  router.post("/", async(req, res)=>{
    const result = await mysql.query(sql.insertBoard, req.body);
    res.send(result);
  })
  
  // 수정
  router.put("/:id", async(req, res)=>{
    const result = await mysql.query(sql.updateBoard, [req.body, req.params.id])
    res.send(result);
  })
  
  // 삭제
  router.delete("/:id", async(req, res)=>{
    const result = await mysql.query(sql.deleteBoard, req.params.id);
    res.send(result);
  })
  
  module.exports = router;