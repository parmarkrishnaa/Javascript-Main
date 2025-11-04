let product_table = document.querySelector('#product-table tbody');
let products = JSON.parse(localStorage.getItem('products')) || [];

let displayData = () => {
    product_table.innerHTML = "";
    products.forEach((product, index) => {
        let { image, name, price, description } = product;
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${image}</td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${description}</td>
            <td>
                <button class="btn btn-warning" onclick="edit_data()">Edit</button>
                <button class="btn btn-danger" onclick="delete_data()">Delete</button>
            </td>
        `;

        product_table.appendChild(row);
    });
};

delete_data = (index) => {
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    displayData();
}

displayData();