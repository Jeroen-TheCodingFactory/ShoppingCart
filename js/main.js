let addToCartButtons = document.getElementsByClassName("add-to-cart");
let modalIsShown = false;
let ironman = 0;
let c3po = 0;
let buzzLightyear = 0;

function setup(){
    updateCartMessage("0");
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].onclick = function () {
            addToCart(addToCartButtons[i].dataset.item);
        }
    }
    document.getElementById("js--arrow").style.display="none";
}

setup();

/* onclick for cart button */
let cart = document.getElementsByClassName("cart")[0];
cart.onclick = function () {
    if (modalIsShown === false) {
        document.getElementsByClassName("shoppingCartModal")[0].style.display = "block";
        document.getElementsByTagName("main")[0].style.display = "none";
        modalIsShown = true;
        updateQuantity();
        window.scrollTo(0,0);
        document.getElementById("js--arrow").style.display="block";
        document.getElementById("js--shopping").style.display="none";
        document.getElementById("js--cart__message").style.display = "none";
        return;
    }
    document.getElementsByClassName("shoppingCartModal")[0].style.display = "none";
    document.getElementsByTagName("main")[0].style.display = "block";
    modalIsShown = false;
    document.getElementById("js--arrow").style.display="none";
    document.getElementById("js--shopping").style.display="block";
    document.getElementById("js--cart__message").style.display = "block";
    window.scrollTo(0,0);

}

let popupOpen = false;
/* functions that writes item to vars */
function addToCart(item) {
    switch(item){
        case "BUZZLIGHTYEAR":
             buzzLightyear += 1;
            break;
        case "IRONMAN":
            ironman += 1;
            break;
        case "C3PO":
            c3po += 1;
            break;
    }
    if(popupOpen === false){
        popupOpen = true;
        document.getElementById("js--popup").style.display = "flex";
        setTimeout(function(){
            document.getElementById("js--popup").style.display = "none";
            popupOpen = false;
        },2000);
    }
    
    updateCartMessage(buzzLightyear + ironman + c3po);
}

/* updates the message to cart */
function updateCartMessage(message) {
    document.getElementById("js--cart__message").innerHTML = message;
}

/* resets everything in local storage and visual */
function resetCart() {
    ironman = 0;
    buzzLightyear = 0;
    c3po = 0;
    document.getElementById("js--buzz-amount").innerHTML = 0 + "x";
    document.getElementById("js--ironman-amount").innerHTML = 0 + "x";
    document.getElementById("js--c3po-amount").innerHTML = 0 + "x";
    updateCartMessage(0);
}

/* calculated amount in modal */
function updateQuantity() {
    document.getElementById("js--buzz-amount").innerHTML = buzzLightyear + "x";
    document.getElementById("js--ironman-amount").innerHTML = ironman + "x";
    document.getElementById("js--c3po-amount").innerHTML = c3po + "x";
}