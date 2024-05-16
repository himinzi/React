const express = require("express");
const router = express.Router();

const mysql = require("../mysql");

const sql ={
  todoList:"SELECT * FROM todo",
  addTodo :"INSERT INTO todo SET ?",
  updateTodo :"UPDATE todo SET ? WHERE id=?",
  deleteTodo:"DELETE FROM todo WHERE id = ?"
}

// 할 일 전체
router.get("/", async(req, res)=>{
  const result = await mysql.query(sql.todoList);
  res.send(result);
})

// 할 일 추가
router.post("/", async(req, res)=>{
  const result = await mysql.query(sql.addTodo, req.body);
  res.send(result);
})

// 할 일 수정
router.put("/:id", async(req, res)=>{
  const result = await mysql.query(sql.updateTodo, [req.body, req.params.id])
  res.send(result);
})

// 할 일 삭제
router.delete("/:id", async(req, res)=>{
  const result = await mysql.query(sql.deleteTodo, req.params.id);
  res.send(result);
})

module.exports = router;