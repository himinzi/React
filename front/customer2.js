function customerList() {
    fetch("http://localhost:3000/customer")
        .then(result => result.json())
        .then(result => {
            for (cust of result) {
                const newTag = `<tr>
            <td class="text-center">${cust.id}</td>
            <td class="text-center">${cust.name}</td>
            <td class="text-center">${cust.email}</td>
            <td class="text-center">${cust.phone}</td>
            <td class="text-center">${cust.address}</td>
            <td class="text-center">
                <button class="btnUpd">조회</button>
                <button class="btnDel">삭제</button>
            </td>
        </tr>`
                list.insertAdjacentHTML("beforeend", newTag);
            }
        })

}

function insertCustomer() {
    fetch("http://localhost:3000/customer/")
        .then(result => result.json())
        .then(result => {
            const newTag = `<tr>
            <td class="text-center">${document.querySelector('input[name =id]').value}</td>
            <td class="text-center">${document.querySelector('input[name =name]').value}</td>
            <td class="text-center">${document.querySelector('input[name =password]').value}</td>
            <td class="text-center">${document.querySelector('input[name =call]').value}</td>
            <td class="text-center">${document.querySelector('select[name=role] option:selected').value}</td>
            <td class="text-center">
                <button class="btnUpd">조회</button>
                <button class="btnDel">삭제</button>
            </td>
        </tr>`
            list.insertAdjacentHTML("beforeend", newTag);

        })
}


customerList();
insertCustomer();