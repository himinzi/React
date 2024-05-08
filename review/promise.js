//filename : promise.js

//setInterval() // 반복실행

function delay(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('timeout');
            resolve();
        }, 3000); // 한번만 실행
    }) // end of promise
} // end of delay function

// delay()
// .then(() => console.log('call')) // resolve
// .catch(() => console.log('error')); // reject


async function execDelay(){ // then catch 대신 await
    await delay(); // delay 가 끝날 때 까지 await , await빼면 call이 먼저 실행됨 
    console.log('call');
} // end of execDelay function

execDelay();