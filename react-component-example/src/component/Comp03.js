import ProductComponent from "./Product";

function Comp(props) {
//     key는 형제 노드에서만 고유하면 된다. 즉, 전역에서 고유할 필요는 없고 해당 배열 안에서만 고유하면 된다.
//     최후의 수단으로 배열의 인덱스를 key로 사용할 수 있다.
//     항목들이 재배열되지 않는다면 이 방법도 잘 동작할 것이지만, 
//     만약 재배열되는 경우 컴포넌트의 state와 관련된 문제가 발생할 수 있다.
    let lis = props.productList.map((p) => <ProductComponent key ={p.no} productList = {p}/>)
    return (
        <table>
            <thead>
                <tr>
                    <th>번호</th><th>상품명</th><th>가격</th>
                </tr>
            </thead>
            <tbody>
                {lis}
            </tbody>
        </table>
    )
}

export default Comp;