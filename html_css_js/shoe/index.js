function addToCart(name, price) {
    var cartItems = document.getElementById("cart-items");
    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td>" + name + "</td><td>" + price + "</td>";
    cartItems.appendChild(newRow);
}