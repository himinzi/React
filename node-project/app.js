const express = require("express");
const pool = require("./mysql");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world!~~");
});

//get, post 는 대부분 form
//put, delete 는 대부분 json

// 단건 조회 : path variable => GET, req.params
// app.get("/customer/:no", (req, res) => {
//     const no = req.params.no;
//     res.send({ cmd: "고객정보조회", no });
// }) //http://localhost:3000/customer/100

// 등록 form POST : req.body로 받기! GET : req.query
// app.post("/customer", (req, res) => {
//     const no = req.body.no;
//     const username = req.body.username;
//     res.send({ cmd: "신규고객추가", no, username }); //객체 타입 으로 보내버리기 
// });

// // 수정 PUT, json => req.body
// app.put("/customer/:no", (req, res) => {
//     const no = req.params.no; // url의 param으로 받음 
//     const username = req.body.username;
//     const phone = req.body.phone;
//     res.send({ cmd: "고객정보 수정", no, ...req.body });
//     // body에 넣은 애들만 ...req.body(spread)로 받을 수 있음.
//     //res.send({ cmd:"고객정보 수정", no, username, phone });
// })

// // 삭제 
// app.delete("/customer/:no", (req, res) => {
//     const no = req.params.no; // url의 param으로 받음 
//     res.send({ cmd: "고객정보 삭제", no });
// })

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

// 단건조회
app.get("/customer/:id", (req, res) => {
    const id = req.params.id;
    sql = `SELECT * FROM customer WHERE id =${id}`;
    pool.query(sql, function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log(id);
        console.log(results);
        res.send(results);
    })
})

// 등록
app.post("/customer", (req, res) => {
    const id = req.body.id;
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    sql = `insert into set name = ${username}, id=${id}, email=${email}, phone=${phone}, address=${address} `
    pool.query(sql, function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.send({ cmd: "신규고객추가", ...req.body });
        res.send(results);
    })
})

//수정
app.put("/customer/:id", (req, res) => {
    const id = req.params.id;
    const email = req.body.email;
    sql = `UPDATE customer set email=${email} where id =${id}`
    pool.query(sql, function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.send({ cmd: "수정되었습니다.", id, ...req.body });
        res.send(results);
    })
})
//삭제
app.delete("/customer/:id", (req, res) => {
    const id = req.params.id; // url의 param으로 받음 
    sql = `delete from customer where id =${id}`
    pool.query(sql, function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.send({ cmd: "삭제되었습니다.", id, ...req.body });
        res.send(results);
    })
    res.send({ cmd: "고객정보 삭제", id });
})
// app.route("/customer")
//     .get((req, res) => { res.send("고객정보조회"); })
// .post( (req, res) => { 
//     const no = req.body.no;
//     const uName = req.body.username;
//     res.send({ cmd:"신규고객추가", no:no, username:uName }); //객체 타입 으로 보내버리기 
// })
// .put( (req, res) => { res.send("고객정보 수정"); })
//.delete((req, res) => { res.send("고객정보 삭제"); })
// res.json, res.send 등 여러가지 있는데 send가 젤 편함 자동으로 json으로 해줌

app.listen(port, () => {
    console.log(`server runing http://localhost:${port}`);
});