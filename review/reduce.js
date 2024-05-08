
const array1 = [1,2,3,4];
const init = 0;
let sum = array1.reduce((accummulator, currentValue)=> accummulator + currentValue, init);
sum = array1.reduce(function(accummulator, currentValue)
    { return accummulator + currentValue }, init);

console.log(sum);


let emps = [ { name: 'park', age: 20, auth : true, point: 100},
         { name: 'choi', age: 26, auth : true, point: 200},
         { name: 'kim', age:10, auth: false, point: 150}
]

let basePoint  = 1000;
let totalPoint = emps.reduce((acc,curr) => acc+curr.point, basePoint);
totalPoint = emps.reduce(function(acc, curr){
    return acc+curr.point;
}, basePoint);
console.log(totalPoint);
