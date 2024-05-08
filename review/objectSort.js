// filename : objectSort.js
emps = [ { name: 'park', age: 20},
         { name: 'choi', age: 26},
         { name: 'kim', age:10}
]
// age로 정렬
emps.sort((a,b) => a.age - b.age);
console.log(emps);
//name 정렬
emps.sort((a,b) => emps.name);
console.log(emps);

emps.sort((a,b) => a.name > b.name ? 1 : a.name == b.name ? 0 : -1);
console.log(emps);
