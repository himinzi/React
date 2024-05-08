//filename : arrayMap.js
let arr = [1, 2, 3, 5];
let arr2 = arr.map(x => x*2);
console.log(arr2);


let emps = [ { name: 'park', age: 20},
         { name: 'choi', age: 26},
         { name: 'kim', age:10}
]

let emps2 = emps.map(a => {
    a.age >= 20 ? a.auth = true : a.auth = false;
    return a;
});
console.log('1번 풀이');
console.log(emps2);

emps2 = [];
for(let i =0; i<emps.length; i++){
    emps2 = emps;
    emps2[i].auth = (emps2[i].age>=20 ? true:false);
}
console.log('2번 풀이');
console.log(emps2);


emps = [ { name: 'park', age: 20, auth : true},
         { name: 'choi', age: 26, auth : true},
         { name: 'kim', age:10, auth: false}
]

