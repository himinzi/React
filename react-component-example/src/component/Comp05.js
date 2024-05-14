import { useState } from "react";

function Comp() {
    let [color, setColor] = useState('black');
    const changeColor = (c) => {
        setColor(c);
    }
    let [message, setMessage] = useState('안뇽하세용');

    return (
        <>  <button onClick={(e)=> setMessage('하이')}>입장</button>
            <button onClick={(e)=> setMessage('바이')}>퇴장</button>
            <h1 style={{ 'backgroundColor': color, 'color': 'white' }}>{message}</h1>
            {/*객체 타입으로 묶어서 스타일주기! 스타일이 객체 타입임
              밑에 e 안 넣어주면 바로 실행 돼버림! 반드시 event 들어왓을 시 실행되게 해줘야 됨 */}
            <button onClick={(e) => setColor('red')}>빨강</button> 
            {/* setColor 바로 호출해서 실행해도 됨! */}
            <button onClick={(e) => changeColor('blue')}>파랑</button>
            <button onClick={(e) => changeColor('green')}>초록</button>
        </>
    )
}

export default Comp;