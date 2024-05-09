// filename : server.js
// 웹서버
//1. http 모듈 포함
const http = require('http');
//2. http 서버 생성

const movie = require('./movie.js'); // 여기 선언한 movie가 함수 movie랑 같아야 함!
movie();
const server = http.createServer((req, res) => {
    //console.log(req.url); // sever console에 찍힘 
    //res.write('hello');
    res.writeHead(200,{"Content-Type":"application/json"}); //200번 생략가능 ! default가 'ok:200'
   (async () => {
    let movieNm = await movie();
    console.log(movieNm);
    let movieInfo = {movieNm: movieNm, movieCd:1};
    res.end(JSON.stringify(movieInfo));
   })(); 
});
    // res.getWriter.append();

//3. 지정된 포트 및 호스트이름으로 수신대기
//4. 서버가 준비되면 콜백함수 호출
server.listen(3000, '127.0.0.1', () => {
    console.log('server running http://127.0.0.1:3000')
});
