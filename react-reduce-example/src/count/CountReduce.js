import React, {useReducer} from 'react';

function counterReducer(count, action){ // 명령에 쓰이는 값을 action으로 받아옴
    if(action.type === 'up'){
        return count+1
    }else if(action.type === 'down'){
        return count-1
    } else if(action.type === 'reset'){
        return 0
    }
}

export default function App(){
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(counterReducer, 0); // 리듀서 함수, 초기값 사용

    function down(){
        // setCount(count-1);
        dispatch({
            type:"down"
        })
    }

    function up(){
        // setCount(count+1);
        dispatch({
            type:"up"
        })
    }

    function reset(){
        // setCount(0);
        dispatch({
            type:"reset"
        })
    }

    return(
        <div>
            <button type='button' onClick={up}>up</button>
            <button type='button' onClick={down}>down</button>
            <button type='button' onClick={reset}>reset</button>
            <span>{count}</span>
        </div>
    )
}