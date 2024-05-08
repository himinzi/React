let emps = [ { name: 'park', age: 20, point : 100},
         { name: 'choi', age: 26, point : 100},
         { name: 'kim', age:10, point: 100}
];


module.exports = function totalPoint(){
    return emps.reduce((acc,crr)=> acc+crr.point,0)
}
