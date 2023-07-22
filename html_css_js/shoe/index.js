let btn = document.querySelector("#bill");
    btn.addEventListener("click", bill)
    function addToCart(name, price) {
        var cartItems = document.getElementById("cart-items");
        var newRow = document.createElement("tr");
        newRow.innerHTML = "<td>" + name + "</td><td class='prices'>" + price + "</td>";
        cartItems.appendChild(newRow);
    }


    function bill() {
        let total = 0;
        let name;
        if(loggedInUsername){
        name = loggedInUsername.toUpperCase();
        }
        else{
        name=prompt("Enter Customer's name:");
        }
        let list_prices = document.querySelectorAll(".prices");
        list_prices.forEach(function (priceElement) {
            let priceText = priceElement.textContent;
            let formattedPrice = priceText.replace(",", "");
            formattedPrice = formattedPrice.replace("$", "");
            price = Number(formattedPrice);
            total += price;
        });

        let display_price = document.querySelector("#total");
        display_price.innerHTML = "Total: " + total + "$";
        let buyer_name = document.querySelector("#buyer_name");
        buyer_name.innerHTML = "Name: " + name;
        btn.innerHTML = "Confirm";
        btn.removeEventListener("click", bill);
        btn.addEventListener('click', final);
    }


    function toggle_dropdown() {
        let dropdown_menu = document.querySelector(".dropdown-content");
        dropdown_menu.classList.toggle("dropdown-content-visible");
    }

    function final() {
        let final_box = document.querySelector(".box");
        final_box.classList.toggle("final_box_visility");
        let fname = document.querySelector("#buyer_name").textContent.split(": ")[1];
        let box = document.querySelector(".final_text");
        let final_box1 = document.querySelector(".final_box");
        final_box1.classList.add("final_box_shadow");
        box.innerHTML = "Thanks <b>" + fname + "</b> for Shopping with us today.";
        let background=document.querySelector(".background");
        background.classList.add("opacity_zero");
        final_box.classList.remove("box");
    }

    function resetFooterPosition() {
        let footer = document.getElementById("footer")
        footer.classList.remove("footer")
        footer.classList.add("footer_show");
    }

    window.addEventListener("load", resetFooterPosition);

    var loggedInUsername =localStorage.getItem('loggedInUsername');

    if (loggedInUsername) {
        
        console.log('Logged in user:', loggedInUsername);
        let footer = document.getElementById("footer")
        footer.innerHTML = "";
        footer.innerHTML += `<p>Welcome ${loggedInUsername}</p>`;
        setTimeout(function () {
            footer.classList.add("footer_go");
        }, 4000);
    }


function logout(){
    localStorage.removeItem('loggedInUsername');
    location.reload();
}

    
