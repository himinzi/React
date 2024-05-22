
import '../index.css'
import { createContext, useContext } from 'react';
const themeDefault = { border: '10px solid green' };

// 1단계 : 생성
const themeContext = createContext();


export default function App() {
    return (<div className='root'>
        <h1>hello</h1>
        {/* 2단계 : value값 정의 */}
        <themeContext.Provider value={themeDefault}>
            <Sub1></Sub1>
        </themeContext.Provider>
    </div>)
}

function Sub1() {
    return (
        <div>
            <h1>sub1</h1>
            <Sub2></Sub2>
        </div>
    )
}

function Sub2() {
    return (
        <div>
            <h1>sub2</h1>
            <Sub3></Sub3>
        </div>
    )
}

function Sub3() {
    // 3단계 : 사용
    const theme = useContext(themeContext);
    return (
        <div style={theme}>
            <h1>sub3</h1>
            <Sub4></Sub4>
        </div>
    )
}

function Sub4() {
    return (
        <div>
            <h1>sub4</h1>
        </div>
    )
}