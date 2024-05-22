const express = require('express');
const router = express.Router();

const multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

const mysql = require("../mysql");

const restInfoSql = {
  // 식당 
  restList: `SELECT i.rest_no
      , i.location
      , i.city
      , i.district
      , i.menu_type
      , i.rest_name
      , i.tel_no
      , i.open_hour
      , i.close_hour
      , i.kids
      , i.dine_in
      , i.seat_cnt
      , i.thumbnail
      , review_num
      , round(review_avg, 1) as review_avg
      , rest_date
FROM restaurant_info i 
JOIN (select  rest_no
      , count(r.review_cnt) as review_num
      , avg(r.review_cnt) as review_avg
FROM review r
GROUP BY rest_no) r ON i.rest_no = r.rest_no
`,

  oneRestInfo: "SELECT * FROM restaurant_info WHERE rest_no=?",
  insertRestInfo: "INSERT into restaurant_info set ? ",
  updateRestInfo: "UPDATE restaurant_info SET ? WHERE ?",
  deleteRestInfo: "DELETE FROM restaurant_info WHERE rest_no= ?",
  //회원 view
  myRestList: `SELECT * FROM restaurant_info WHERE member_id = ?`,

  //   // 이미지, 메뉴
  oneRestImg: "SELECT * FROM restaurant_img WHERE rest_no = ?",
  insertRestImg: "INSERT INTO restaurant_img SET ?",
  updateRestImg: "UPDATE restaurant_img SET ?'  WHERE rest_img_no =?",
  deleteRestImg: "DELETE FROM restaurant_img WHERE rest_img_no = ?"
}

const sqlRestReview = {
  reviewList: `select rest_no,
  member_id,
      review_content,
      review_cnt,
      review_img,
      (CASE
       WHEN INSTR(DATE_FORMAT(review_date, '%Y-%m-%d %p %h:%i'), 'PM') > 0
       THEN REPLACE(DATE_FORMAT(review_date, '%Y-%m-%d %p %h:%i'), 'PM', '오후')
       ELSE REPLACE(DATE_FORMAT(review_date, '%Y-%m-%d %p %h:%i'), 'AM', '오전')    
       END) AS review_date 
from review
WHERE rest_no =?`,
  insertReview: `INSERT INTO review SET ?`,
  deleteReview: `DELETE FROM review WHERE review_no = ?`,

  //이미지
  // reviewImg: `SELECT * FROM review_img WHERE review_no =?`,
  insertReviewImg: `INSERT into review set ? `,
  deleteReviewImg: `"DELETE FROM review WHERE review_no= ?`,

  //회원 view
  myReviewList: `SELECT * FROM review WHERE member_id = ?`


}
//httpp://resr/dae/restdate

// 식당 전체 - 검색 조건: menu_type/city/district+ 정렬 : restdate, review_num, review_avg
router.get("/", async (req, res) => {
  let sql = restInfoSql.restList;
  let params = []
  if (req.query.city != 'undefined' && req.query.district != 'undefined' && req.query.menu_type != 'undefined') {
    sql += `where city = ? and district = ? and menu_type= ?`;
    params.push(req.query.city);
    params.push(req.query.district);
    params.push(req.query.menu_type);
  } else if (req.query.city != 'undefined' && req.query.menu_type != 'undefined') {
    sql += `where city =? and menu_type =?`
    params.push(req.query.city);
    params.push(req.query.menu_type);
  } else if (req.query.city != 'undefined') {
    sql += `where city = ?`
    params.push(req.query.city);
  }


  if (req.query.order != 'undefined') {
    sql += `order by ${req.query.order} desc`;
  }
  console.log(sql);

  const result = await mysql.query(sql, params);
  res.send(result);
})

///////////////////////////////////가게///////////////////////////////////
// 가게 info 1개 
router.get("/:no", async (req, res) => {
  let data = [];
  const result = await mysql.query(restInfoSql.oneRestInfo, req.params.no);
  const imgResult = await mysql.query(restInfoSql.oneRestImg, req.params.no);
  data.push({ rest: result });
  data.push({ restImg: imgResult });
  res.send(data);
})

// 가게 info 추가
router.post("/", upload.single('thumbnail'), async (req, res) => {
  const data = { ...req.body, thumbnail: req.file.filename }
  const result = await mysql.query(restInfoSql.insertRestInfo, data);
  res.send(result);
})
// 가게 img 추가
//,upload.single('uploaded_file')
router.post("/menu", upload.single('menu_img'), async (req, res) => {
  const data = { ...req.body, menu_img: req.file.filename }
  const result = await mysql.query(restInfoSql.insertRestImg, data);
  res.send(result);
  console.lod(req.file);
  console.lod(req.file.filename);
})

// 가게 info 수정
router.put("/:no", async (req, res) => {
  const result = await mysql.query(restInfoSql.updateRestInfo, [req.body, req.params.no])
  res.send(result);
})

// 가게 img 수정 
router.put("/menu/:no", async (req, res) => {
  const result = await mysql.query(restInfoSql.updateRestImg, [req.body, req.params.no])
  res.send(result);
})

// 가게 info 삭제
router.delete("/:no", async (req, res) => {
  const result = await mysql.query(restInfoSql.deleteRestInfo, req.params.no);
  res.send(result);
})

// 가게 menu 삭제
router.delete("/menu/:no", async (req, res) => {
  const result = await mysql.query(restInfoSql.deleteRestImg, req.params.no);
  res.send(result);
})
sqlRestReview
///////////////////////////////////리뷰///////////////////////////////////
// 리뷰
router.get("/review/:no", async (req, res) => {
  const result = await mysql.query(sqlRestReview.reviewList, Number(req.params.no)).catch((e) => console.log(e));
  // const imgResult = await mysql.query(sqlRestReview.reviewImg, req.params.no);
  //data.push(result );
  // data.push({ reviewImg: imgResult });
  res.send(result);
})

// 리뷰 추가
router.post("/review", async (req, res) => {
  const result = await mysql.query(sqlRestReview.insertReview, req.body);
  res.send(result);
})

// 리뷰 img 추가
router.post("/review/img", async (req, res) => {
  const result = await mysql.query(sqlRestReview.insertReviewImg, req.body);
  res.send(result);
})

// 리뷰 삭제
router.delete("/review/:no", async (req, res) => {
  const result = await mysql.query(sqlRestReview.deleteReview, req.params.no);
  res.send(result);
})

// 리뷰 img 삭제
router.delete("/review/img/:no", async (req, res) => {
  const result = await mysql.query(sqlRestReview.deleteReviewImg, req.params.no);
  res.send(result);
})





module.exports = router;