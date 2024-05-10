const express = require("express");
const productRoute = require("./routes/product");
const customerRoute = require("./routes/customer");
const todoRoute = require("./routes/todo");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/product", productRoute);
app.use("/customer", customerRoute);
app.use("/todo", todoRoute );
// express가 다 json parsing 해줌
// body queryString  ==> req.body 

app.get("/", (req, res) => {
  res.send("hello world!");
});

// 전체 조회
app.get("/customer", (req, res) => {
    // 2. SQL 실행
    sql = "SELECT * FROM customer";
    //sql = "UPDATE customer set name='' where "
    pool.query(sql, function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        //3. 결과 처리
        console.log(results);
        res.send(results);

        // 다 끝나면 자동으로 pool release 해줌!
    });
})

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});