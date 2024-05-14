import { useState } from "react"; // 이것도 객체 구조분해임 

function Comp04() {
    let [count, setCount] = useState(10);
    // let countState = useState(10); // 이 3줄이랑 위에꺼랑 같음
    // let count = countState[0];
    // let setCount =countState[1];
    
    const onIncrease = () => {
        setCount(count + 1);
    }
    const onDecrease = () => {
        setCount(count - 1);
    }
    return (
        <>
            <h2>{count}</h2>
            <div>
                <button onClick ={onIncrease}>증가</button>
                <button onClick = {onDecrease}>감소</button>
            </div>
        </>

    )
}

export default Comp04; 