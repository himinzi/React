//필요한 것만 import
//import { module, moduleA } from "./module.js";
//module("module run");
//moduleA("모듈A 달려");

// module 전체 import => as를 이용해서 객체의 이름을 지정해야 함!
// import * as md from "./module.js"
// md.module("run");
// md.moduleA("runrun");

import {movie} from "../review/promise_await.js";
movie();

import { totalPoint} from "./myarray.js";
let result = totalPoint();
console.log(result);