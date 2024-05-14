const ProductComponent = (props) => {
    const { no, pname, price} = props.productList;

    return(
        <tr onClick={(e)=>props.onClick(no)}> 
            <td>{no}</td><td>{pname}</td><td>{price}</td>
        </tr>
    )
}

export default ProductComponent;