import React, { useState } from 'react';
import './style.css';
import { legacy_createStore as createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux'

function reducer(currentState, action) { // state로 쓸 변수, state로 처리할 action
    // //state 초기화
    // if (currentState === undefined) {
    //     return { number: 1 }
    // }

    const newState = { ...currentState };
    newState.number = newState.number + 1
    return newState
    //currentState 값 들어오면, return
}
const store = createStore(reducer, { number: 1 }); // 저장소

export default function App() {
    const [number, setNumber] = useState(1);
    return (
        <div id="container">
            <h1>Root : {number}</h1>
            <div id="grid">
                <Provider store={store}>
                    <Left1></Left1>
                    <Right1></Right1>
                </Provider>
            </div>
        </div>
    );
}
function Left1(props) {
    return (
        <div>
            <h1>Left1</h1>
            <Left2></Left2>
        </div>
    );
}
function Left2(props) {
    return (
        <div>
            <h1>Left2</h1>
            <Left3></Left3>
        </div>
    );
}
function Left3(props) {
    const number = useSelector(state => state.number );
    return (
        <div>
            <h1>Left3 {number}</h1>
        </div>
    );
}
function Right1(props) {
    return (
        <div>
            <h1>Right1</h1>
            <Right2></Right2>
        </div>
    );
}
function Right2(props) {
    return (
        <div>
            <h1>Right2</h1>
            <Right3></Right3>
        </div>
    );
}
function Right3(props) {
    const dispatcher = useDispatch();
    return (
        <div>
            <h1>Right3</h1>
            <input
                type="button"
                value="+"
                onClick={() => { dispatcher()}} // 필요하면 타입 넘기기!!! dispach({type:"up"})
            ></input>
        </div>
    );
}
