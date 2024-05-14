function Comp() {
    const style = { // 일반 css와는 다르게 객체를 넣어주는 것!, field name, 값으로 만들어야 됨
        color: "green",
        backgroundColor: "pink",
        fontSize: "40px"
    };
    const modalYn = true;
    const name = "";
    return (
        <>  
            {/*여기는 주석~*/}
            {modalYn ? <div>모달</div> : null}
            {name === "홍길동" ? <div>홍길동입니다.</div> : <div>홍길동이 아닙니다.</div>}
            {name && <div>홍길동입니다.1</div>} {/*true false 조건연산 하며, 뒤에께 결과값으로 나옴*/ }
            {name || <div>홍길동입니다.2</div>}
            <h2 style={style}>Hello</h2> 
        </>
    ) // 반드시 최상위 root 태그가 필요하며, 태그가 필요 없다면 위와 같이 빈 것도 가능!
}

export default Comp; // default로 내보내기를 하게 되면 import할 때 {} 없이 import가 가능