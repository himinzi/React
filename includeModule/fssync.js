// fssync.js 동기식 = 블록킹 함수
const fs = require('fs'); // html <script src ='xx.js'>
let data = fs.readFileSync("test.txt","utf8");
console.log(data);
console.log('the end');