let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
let value = JSON.parse(localStorage.getItem("qty")) || [];
let totalValue = document.querySelector("#totalValue");
let discountValue = document.querySelector("#discount")
let savedValue = document.querySelector("#saving");
let cartLeft = document.querySelector("#cart-left");
let paidAmount = document.querySelector("#paidAmount");
function cartDisplay(arr) {
    cartLeft.innerHTML = ''
    if (arr.length === 0) {
        let h2 = document.createElement("h2")
        h2.innerText = `Your cart is empty`

        cartLeft.append(h2)

    }
    arr.forEach((element, index) => {

        let mainDiv = document.createElement("div");
        mainDiv.classList.add("mainDiv")
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        let div5 = document.createElement("div");

        let img = document.createElement("img")
        let button1 = document.createElement('button');
        let span2 = document.createElement('span');
        span2.classList.add("quantity")
        let button3 = document.createElement('button');
        //    div2
        let h2 = document.createElement("h2")
        let realPrice = document.createElement("span");
        let discountedPrice = document.createElement("span");
        realPrice.setAttribute("class", "realPrice")
        discountedPrice.setAttribute("class", "discountedPrice")
        let deleteItem = document.createElement("button")


        // div 3
        let deliveryTitle = document.createElement("span");
        let deliveryTitle2 = document.createElement("p");
        let deliveryTitle3 = document.createElement("span");

        // div1
        img.setAttribute("src", element.image);

        button1.innerText = '-';
        span2.innerText = `${value.length === 0 ? 1 : value[index]}`;
        button3.innerText = "+";
        div4.append(button1, span2, button3)
        div1.append(img, div4);

        // div2
        h2.innerText = element.description;
        realPrice.innerText = `₹ ${element.actualPrice}`;
        discountedPrice.innerText = `₹ ${element.discountPrice}`;
        deleteItem.innerText = "REMOVE";
        div5.append(realPrice, discountedPrice)
        div2.append(h2, div5, deleteItem)

        // div3
        deliveryTitle.innerText = `Delivery by Fri Jan 27`;
        deliveryTitle2.innerText = 'Free Delivery';
        deliveryTitle3.innerText = '₹ 200'
        deliveryTitle2.append(deliveryTitle3)
        div3.append(deliveryTitle, deliveryTitle2)

        mainDiv.append(div1, div2, div3)

        cartLeft.append(mainDiv)

        // for decrement and increment
        button1.addEventListener("click", () => {
            let count = +span2.innerText

            if (count > 1) {
                count--
                span2.innerText = count
                qtyUpdate()
                rightDisplay()
            }
        })

        button3.addEventListener("click", () => {

            let count = +span2.innerText
            count++
            span2.innerText = count
            qtyUpdate()
            rightDisplay()


        })
        // for quantity presenting
        function qtyUpdate() {
            quantity = document.querySelectorAll(".quantity")
            quantity.forEach((element, index) => {

                value[index] = element.innerText
                localStorage.setItem("qty", JSON.stringify(value));

            });
        }

        // when user wants to delete any product from cart
        deleteItem.addEventListener("click", () => {
            qtyUpdate()

            cartArr.splice(index, 1);
            value.splice(index, 1)
            localStorage.setItem("cartArr", JSON.stringify(cartArr));
            localStorage.setItem("qty", JSON.stringify(value));
            cartDisplay(cartArr)
            rightDisplay()
        })

    });
}

// for right side amount discount and delivery charges
function rightDisplay() {
    let totalWithOutDiscount = 0
    let totalWithDiscount = 0
    value = JSON.parse(localStorage.getItem("qty")) || []
    cartArr.forEach((element, index) => {
        let currentqty = +value[index]
     totalWithOutDiscount = totalWithOutDiscount + currentqty * element.actualPrice;
        totalWithDiscount = totalWithDiscount + currentqty * element.discountPrice;
    });
    totalValue.innerText = `₹ ${totalWithOutDiscount}`
    paidAmount.innerText = `₹ ${totalWithDiscount}`
    discountValue.innerText = `₹ ${totalWithOutDiscount - totalWithDiscount}`
    savedValue.innerText = `₹ ${totalWithOutDiscount - totalWithDiscount}`

}
rightDisplay(cartArr)
cartDisplay(cartArr)