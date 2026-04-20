//script.js
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart
function addToCart(name, price) {

    let item = cart.find(p => p.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart");
}

// Load Cart Page
function loadCart() {

    let table = document.getElementById("cartTable");
    let total = 0;

    cart.forEach((item, index) => {

        let row = table.insertRow();

        row.insertCell(0).innerHTML = item.name;
        row.insertCell(1).innerHTML = "₹" + item.price;

        // Quantity Input
        let qtyInput = document.createElement("input");
        qtyInput.type = "number";
        qtyInput.value = item.qty;
        qtyInput.min = 1;

        qtyInput.onchange = function () {
            updateQty(index, this.value);
        };

        row.insertCell(2).appendChild(qtyInput);

        let itemTotal = item.price * item.qty;
        row.insertCell(3).innerHTML = "₹" + itemTotal;

        total += itemTotal;

        let delBtn = document.createElement("button");
        delBtn.innerHTML = "X";
        delBtn.onclick = function () {
            removeItem(index);
        };

        row.insertCell(4).appendChild(delBtn);
    });

    document.getElementById("grandTotal").innerHTML =
        "Grand Total: ₹" + total;
}

// Update Quantity
function updateQty(index, qty) {
    cart[index].qty = Number(qty);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

// Remove Item
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

// Run on cart page
if (window.location.pathname.includes("cart.html")) {
    loadCart();
}