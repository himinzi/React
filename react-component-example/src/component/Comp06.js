import ProductComponent from "./Product";
import { useState } from "react";

function Comp() {
    const products = [
        { no: 1, pname: "apple", price: 200 },
        { no: 2, pname: "banana", price: 300 },
        { no: 3, pname: "orange", price: 400 }
    ]
    let [product, setProduct] = useState(products);
    const trDel = (no) =>{
        let newProducts =[];
        newProducts = product.filter(p => p.no !== no );
        setProduct(newProducts);
    };
    const trBack = () => {
        setProduct(products);
    }
    let lis = product.map((p) => <ProductComponent key={p.no} productList={p} onClick={trDel} />)
    return (
        <>
            {/* <button onClick={(e) =>  trDel()}>삭제</button> */}
            <button onClick={(e) =>  trBack()}>원래대로</button>
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
        </>
    )
}

export default Comp;