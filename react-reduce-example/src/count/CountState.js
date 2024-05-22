import React, {useState} from 'react';

export default function App(){
    const [count, setCount] = useState(0);

    function down(){
        setCount(count-1);
    }

    function up(){
        setCount(count+1);
    }

    function reset(){
        setCount(0);
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