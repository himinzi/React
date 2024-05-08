function module(msg){
    console.log("msg : " + msg);
}

function moduleA(msg){
    console.log("moduleA : " + msg);
}

export {module, moduleA}; // 앞에 export 안 쓰고 둘 다 내보내기~~~