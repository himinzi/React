function Searchbar() {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <label><input type="checkbox" /> Only show products in stock</label>
        </form>

    );
}


function ProductTable(props) {
    let product = [];
    for(let ele of props){
        
    }

    return (
        <tbody>
            <tr>
                <th colspan="2">Fruits</th>
            </tr>
            <tr>
                <td>Apple</td>
                <td>$1</td>
            </tr>
            <tr>
                <td>Dragonfruit</td>
                <td>$1</td>
            </tr>
            <tr>
                <td><span style="color: red;">Passionfruit</span></td>
                <td>$2</td>
            </tr>
            <tr>
                <th colspan="2">Vegetables</th>
            </tr>
            <tr>
                <td>Spinach</td>
                <td>$2</td>
            </tr>
            <tr>
                <td><span style="color: red;">Pumpkin</span></td>
                <td>$4</td>
            </tr>
            <tr>
                <td>Peas</td>
                <td>$1</td>
            </tr>
        </tbody>
    );
}


// function ProductCategoryRow(category) {
//     return (

//       );
// }


// function ProductRow(props) {

//     return (

//     );
// }

function FilterableProductTable() {
    const products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];

    return (
        <div>
            <Searchbar/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <ProductTable title={products}/>
            </table>
        </div>
    );
}


export default FilterableProductTable;