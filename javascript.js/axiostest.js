const axios = require('axios'); // node에서 axios는 이렇게 가져와야 함~ 

function todoGet() {
    axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(
        res => console.log(res.data)
    );
}

const url ='https://jsonplaceholder.typicode.com/todos';
function todoPost(){
    const param = { userId: 1,title: 'ㅎㅎ', completed: false };
    axios
    .post(url, param)
    .then(res => console.log(res.data));
}


function todoPut(){
    const param = { title: 'ㅋㄷ',};
    axios
    .put(url + "/1", param)
    .then(res => console.log(res.data));
}

function todoDel(){
    axios
    .delete(url + '/1')
    .then(res => console.log(res.data));
}

// todoGet();
// todoPost();
// todoPut();
// todoDel();