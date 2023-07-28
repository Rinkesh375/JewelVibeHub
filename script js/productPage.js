let offerText = ["Flat 10% off on Making Charges + Get Rs.1000 Shaya Voucher ", 'Offer Expires in 3 days']
let imageBox = document.querySelector("#imageBox>img");
let addToCartItems = JSON.parse(localStorage.getItem("cartArr")) || [];
let value = JSON.parse(localStorage.getItem("qty")) || [];
let showProduct = document.querySelector("#showProduct")
let description = document.querySelector("#textDetailsBox>div>h2");
let element = JSON.parse(localStorage.getItem("selectedProduct"))
let spanOfPrice = document.querySelectorAll("#textDetailsBox>div:nth-child(9)>span");

let h4Offer = document.querySelector("h4");


imageBox.setAttribute("src", element.image)
description.innerText = element.description;
spanOfPrice[0].innerText = `₹ ${element.discountPrice}`;
spanOfPrice[1].innerText = `₹ ${element.actualPrice}`;
let index = 0
setInterval(() => {
    if (index === 2) index = 0;
    h4Offer.innerText = offerText[index++]
}, 2000);

// To check whether click product is available on cart page or not
function check() {
    for (let ele of addToCartItems) {
        if (ele.id == element.id) {
            return true
        }
    }
    return false;
}


// Add to cart Button Property
let addToCart = document.querySelector("#boxAddToCart");
let earnRewardText = document.querySelector("#boxAddToCart>a");
let addTocartMessage = document.querySelector("#addTocartMessage");
let removeTocartMessage = document.querySelector("#addTocartMessage>i");
earnRewardText.addEventListener("click", () => {
    let result = check()
    if (result) {
        alert("This item already in cart")
    }
    else {
        addToCartItems.push(element)
        value.push(1)
        localStorage.setItem("cartArr", JSON.stringify(addToCartItems))
        localStorage.setItem("qty", JSON.stringify(value))
        addTocartMessage.style.display = "block"
        setTimeout(() => {
            addTocartMessage.style.display = "none"
        }, 10000);



    }
})
removeTocartMessage.addEventListener("click", () => {
    addTocartMessage.style.display = "none"
})
