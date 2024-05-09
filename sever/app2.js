// 1. http 모듈 포함
const http = require('http');
const path = require('path');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;


let emps = [{ no: 100, name: 'park', age: 20 },
{ no: 101, name: 'choi', age: 26 },
{ no: 102, name: 'kim', age: 10 }
]

// 2. http 서버 생성(요청이 수신되면 응답 처리)
const server = http.createServer((req, res) => {
    const _url = url.parse(req.url, true);
    const pathname = _url.pathname;
    res.writeHead(200, { "Content-Type": "application/json" });
    let empNo = emps.filter(emp => emp.no == _url.query.no);
    if (pathname == '/emp') {
        res.end(JSON.stringify(emps));
    } else if (pathname == '/empInfo') { // empInfo?no=100
        console.log(_url.query.no);
        res.end(JSON.stringify(empNo)); // 결과전송
    } else if (pathname == '/empDelete') { // empDelete?no=100
        emps.splice(emps.indexOf(empNo),1); // 기존배열 변경
        res.end(JSON.stringify(emps));
    } else if (pathname == '/empInsert') { // empInsert?no=104&name=hong&age=30
        let no = _url.query.no;
        let name = _url.query.name;
        let age = _url.query.age;
        let insertVal = {
            no: no,
            name: name,
            age: age
        };
        emps.push(insertVal);
        res.end(JSON.stringify(emps));
    } else {
        res.statusCode = 404;
        res.end();
    }
});

// 3. 지정된 포트 및 호스트이름으로 수신 대기
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});