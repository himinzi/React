// 1. http 모듈 포함
const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;
// 2. http 서버 생성(요청이 수신되면 응답 처리)
const server = http.createServer((req, res) => {
    //  const myURL = new URL("http://127.0.0.1" + req.url);
    //  const pathname = myURL.pathname;
    const _url = url.parse(req.url, true);
    const _pathname = _url.pathname;
    const _search = _url.query;
    const _id = _url.query.username;
    const end = 'The end'
    // EX) http://127.0.0.1:3000/user/info?username=park
    console.log("pathname", _pathname); // username
    if (_pathname == "/json") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                data: "Hello World!!",
            })
        );
    } else if (_pathname == "/html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200, { 'Content-Type': "text/html" });
        res.write(`<html lang='ko'><head><meta charset="UTF-8"></head><body>node 서버</body></html>`);
        res.end(end);
    } else if (_pathname == "/text") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(end);
    } else {
        res.statusCode = 404;
        res.end(end);
    }

    console.log("search", _search); // park
    console.log("id", _id);

});
// 3. 지정된 포트 및 호스트이름으로 수신 대기
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});