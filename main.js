// cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closcart= document.querySelector('#close-cart');
// open cart
cartIcon.onclick = ()=>{
    cart.classList.add("active");
};
//  close cart
closcart.onclick = ()=>{
    cart.classList.remove("active");
};
