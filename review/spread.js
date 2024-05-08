// filename : spread.js

// ...
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = arr1; // 깊은 복사(주소복사)
arr3[0] = 9;
arr3 = arr1.map(a => a);
console.log(arr1);
console.log(arr3);

let arr4 = [arr1, ...arr2]; // 얕은 복사(내용만 복사)
console.log(arr4);

let arr5 = [...arr1];
arr5[0] = 200;
console.log(arr1);
console.log(arr5);


