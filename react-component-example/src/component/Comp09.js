import { useState, useRef, useEffect } from "react";

export default function Comp() {
    let [formData, setFormData] = useState({username:"", address: ""});
    let {username, address} = formData;
    let txtUserName = useRef(null);
    let clickHandler =()=>{
        // username + address alert으로 출력 => fetch
        alert(address +':'+ username);
        // input tag를 초기화
        setFormData({username:'', address:''});
        // username 입력태그에 focus
        txtUserName.current.focus();
    }
    const keyDownHandler = (e) => {
        console.log(e.key);
        if(e.key === 'Enter'){
            clickHandler();
        }
    }
    useEffect(()=>{
        txtUserName.current.focus();
    }, [])
    return (
        <>
            <input ref={txtUserName} type="text" name="username" placeholder="이름입력부탁~~☠" value={username} onChange={(e) => { setFormData({...formData, username:e.target.value}) }}></input>
            <input onKeyDown={keyDownHandler} type="text" name="address" placeholder="주소입력부탁~~👁👄👁" value={address} onChange={(e) => { setFormData({...formData, address:e.target.value}) }}></input>
            <button onClick={clickHandler}>확인</button>
            <h3>이름👥👤👩‍👩‍👧👥(웅성웅성)👩‍👩‍👧‍👦👩‍👧‍👧👨‍👧👥👥 <br></br> (웅성웅성)👥👤👩‍👩‍👧👥👩‍👩‍👧‍👦👩‍👧‍👧👨‍👧👥👥 <br></br>: {username}</h3>
            <h2>주소.👁👄.👁 <br></br>: {address}</h2>
        </>
    );
}