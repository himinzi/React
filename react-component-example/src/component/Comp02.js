import Student from "./Student"; //파일 확장자(.js, .css 등)은 제거하여도 문제 없이 동작
//다른 파일로부터 가져온 함수나 변수의 이름을 바꾸서 사용하고 싶다면 as를 이용해 이름을 바꿔 사용
// import { countries as eastAsia, midtermTest, helloWorld } from "./Test";
//import * as JS from './Test' 이렇게 import를 하게되면 JS.countries와 같이 .을 붙여 사용해야한다.
const Comp = () =>{
    const std = [ {no:1, name:"홍길동"},
                {no:2, name:"꽁길동"} ];
    const lis = std.map(st => <Student std ={st} key ={st.no}/> ); //변수 선언 없이 return 구문에 값을 넣어줘도 됨!
    return(
        <>
            {lis}
        </>
    )
}; // 2개 이상 Component 부터 root tag 필요함! 

export default Comp;