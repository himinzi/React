const words = ['e', 'sprawy', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 5);

const result2 = words.filter((l) => l.length > 3);

console.log(result);
console.log(result2);


let emps = [ { name: 'park', age: 20, auth : true, point: 100},
         { name: 'choi', age: 26, auth : true, point: 200},
         { name: 'kim', age:10, auth: false, point: 150}
]

//age가 20이상인 사람만 filtering

let filterAge = emps.filter((emp) => emp.age>=20);
console.log(filterAge);