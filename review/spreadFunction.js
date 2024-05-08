//filename : spreadFunction.js

function hap(first, ...rest){
    //console.log(first);
    //console.log(rest);
    //console.log(...rest);
    let hapArr =[first, ...rest];
    
    // 풀이 1
    hapArr.map(x => x); // 결과 = 배열
    console.log(hapArr);
    let sum = 0;
    for(let i =0; i<hapArr.length; i++){
        sum += hapArr[i];
    }
    console.log(sum);
    console.log(hapArr);

    // 풀이 2
    rest.reduce((acc, crr)=> acc+crr,first); //결과 = 값
    console.log(rest.reduce((acc, crr)=> acc+crr,first));

};

hap(10, 20, 30, 40, 50);

// function hap(first, ...rest){
//     return rest.reduce((total, value) => total+value, first)
// }

// function hap2(first, ...rest){
//     let total = first;
//     for(value of rest){
//         total = total + value;
//     }
//     return total;
// }

let emps = [ { name: 'park', age: 20, auth : true, point: 100},
         { name: 'choi', age: 26, auth : true, point: 200},
         { name: 'kim', age:10, auth: false, point: 150}
]

let [emp1, ...rest] = emps; // let [emp1, emp2, emp3] = emps;  와 같음
console.log(emp1.name);
console.log(rest);
console.log(rest[1].name);
console.log(rest.map(r => r.name));

//object 분해
let {name, age} = emp1;
console.log(name);

const {empname} = { empname: 'park', age:20, point:100};
console.log(empname); 

// 배열 분해
//const arr = [1,2,3];
//arr[0];//이 귀찮
const [a,b,...c] = [1,2,3];
console.log(a);
console.log(...c);

