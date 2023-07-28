let productDisplay = document.querySelector("#product-display");
    let productheadingSpan = document.querySelectorAll("#product-heading-right>span");
    let csReview = document.querySelector("#cs-review");



    let arr =
        [{
            id: 1,
            image: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00168-YG0000_1_lar.jpg",
            discountPrice: 8359,
            actualPrice: 8868,
            description: "Ornate Om Baby Nazaria Gold Bracelet"
        },

        {
            id: 2,
            image: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00167-YG0000_1_lar.jpg",
            discountPrice: 7855,
            actualPrice: 8365,
            description: "Swastik Baby Nazaria Gold Bracelet"
        },

        {
            id: 3,
            image: "https://cdn.caratlane.com/media/catalog/product/J/E/JE03938-YGP600_1_lar.jpg",
            discountPrice: 8421,
            actualPrice: 10527,
            description: "Trillium Diamond Stud Earrings"
        },

        {
            id: 4,
            image: "https://cdn.caratlane.com/media/catalog/product/J/E/JE06187-1RP600_1_lar.jpg",
            discountPrice: 9396,
            actualPrice: 11744,
            description: "Quad Geometric Diamond Stud Earrings"
        },

        {
            id: 5,
            image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02084-1YP900_11_listfront.jpg",
            discountPrice: 8702,
            actualPrice: 10237,
            description: "Delicate Quad Diamond Bracelet"
        },

        {
            id: 6,
            image: "https://cdn.caratlane.com/media/catalog/product/U/E/UE04499-1Y0000_1_lar.jpg",
            discountPrice: 5800,
            actualPrice: 6243,
            description: "Magical Unicorn Kids' Gold Earrings"
        },


        {
            id: 7,
            image: "https://cdn.caratlane.com/media/catalog/product/J/N/JN00048-YGP900_1_lar.jpg",
            discountPrice: 7111,
            actualPrice: 7901,
            description: "Isha Delight Diamond Nose Pin"
        },





        {
            id: 8,
            image: "https://cdn.caratlane.com/media/catalog/product/U/P/UP00899-1Y0000_1_lar.jpg",
            discountPrice: 7586,
            actualPrice: 7895,
            description: "Fashionable Evil Eye Gold Pendant"
        },


        {
            id: 9,
            image: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00684-1Y0000_1_lar.jpg",
            discountPrice: 7191,
            actualPrice: 7500,
            description: "Infinity Love Adjustable Gold Bracelet"
        },


        {
            id: 10,
            image: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00702-1Y0000_1_lar.jpg",
            discountPrice: 6692,
            actualPrice: 7799,
            description: "Chopper Personalised Kids' Gold Bracelet"
        },


        {
            id: 11,
            image: "https://cdn.caratlane.com/media/catalog/product/U/P/UP00058-YG0000_1_lar.jpg",
            discountPrice: 6319,
            actualPrice: 7169,
            description: "Daddy's Princess Kids' Gold Pendant"
        },

        {
            id: 12,
            image: "https://cdn.caratlane.com/media/catalog/product/U/E/UE04784-YG0000_1_lar.jpg",
            discountPrice: 9449,
            actualPrice: 9789,
            description: "Saima Cutout Gold Drop Earrings"
        },

        {
            id: 13,
            image: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00842-1Y0000_1_lar.jpg",
            discountPrice: 7643,
            actualPrice: 8673,
            description: "Butterflies Baby Nazaria Gold Bracelet"
        },


        {
            id: 14,
            image: "https://cdn.caratlane.com/media/catalog/product/U/E/UE04655-1Y0000_6_lar.jpg",
            discountPrice: 5635,
            actualPrice: 6078,
            description: "Enchanted Unicorn Kids' Gold Earrings"
        },

        {
            id: 15,
            image: "https://cdn.caratlane.com/media/catalog/product/U/R/UR00681-1Y0000_1_lar.jpg",
            discountPrice: 9862,
            actualPrice: 10233,
            description: "Love Cursive Gold Ring"
        },
        {
            id: 16,
            image: "https://cdn.caratlane.com/media/catalog/product/U/E/UE04784-YG0000_1_lar.jpg",
            discountPrice: 9449,
            actualPrice: 9789,
            description: "Saima Cutout Gold Drop Earrings"
        }
        ];

    displayProduct(arr);

    function displayProduct(data) {
        productDisplay.innerHTML = "";
        data.forEach((element) => {
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            let div3 = document.createElement("div");
            let anchorTag = document.createElement("a")
            div2.classList.add("product-img");
            div3.classList.add("product-text");
            let image = document.createElement("img");
            let price = document.createElement("h3");
            let priceDiscount = document.createElement("h2");
            let description = document.createElement("p");

            priceDiscount.classList.add("neglect-price");
            anchorTag.setAttribute("href", "productPage.html")
            image.setAttribute("src", element.image);
            price.innerText = `₹ ${element.actualPrice}`;
            priceDiscount.innerText = `₹ ${element.discountPrice}`;
            description.innerText = element.description;
            div2.append(image);
            div3.append(price, priceDiscount, description);
            div1.append(div2, div3);
            anchorTag.append(div1)
            productDisplay.append(anchorTag);

            // when Some click on product for showing product in a new page
            anchorTag.addEventListener("click", () => {

                localStorage.setItem("selectedProduct", JSON.stringify(element))
            })


        });
    }

    // man women hover effect
    productheadingSpan.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.background = "";
            element.style.background = `linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))`;
        });
        element.addEventListener("mouseout", () => {
            element.style.background = "";
        });
    });

    // cs Review section
    let csReviewDiv = document.querySelector("#cs-review>div:nth-child(2)");
    let inputs = document.querySelectorAll("#cs-review input");

    function displayTextSlider(index) {
        let csReviwArr = [
            {
                name: `- Tanya Gupta via Instagram`,
                review: ` “I got this necklace as my wedding gift and instantly loved it. It is literally the only accessory I wore on my entire honeymoon. I love how delicate and beautiful it is.”`,
            },
            {
                name: `- Shilpa Praveen via Instagram`,
                review: `”The six of us wanted to celebrate our year of togetherness with something which will stay with us forever. So, all of us bought this beautiful ring which is the perfect symbol of our friendship and is just so classy!”`,
            },
            {
                name: `- Pooja Rajpoot via Instagram`,
                review: `”My fiance wanted to give me something classic and unique. He searched everywhere, literally half of the Chandigarh for the unique design. Our search was complete when we entered CaratLane store. My fiance selected the diamond and I selected the design. I love it because it is designed just for me.”`,
            }

        ];

        csReviewDiv.innerHTML = "";
        if (index === 3) index = 0;
        let review = document.createElement("p");
        let csName = document.createElement("p");
        review.innerText = `${csReviwArr[index].review}`;
        csName.innerText = `${csReviwArr[index].name}`;
        inputs[index].checked = true;
        csReviewDiv.append(review, csName);
    }

    let index = 1;
    setInterval(() => {
        if (index === 3) index = 0;
        displayTextSlider(index);
        index++;
    }, 5000);

    // for clicking check box
    inputs.forEach((element, i) => {
        element.addEventListener("click", () => {
            displayTextSlider(i);
        });
    });

    // new Arrival form submitting---------------
    let newArrivalForm = document.querySelector("#formNewArrival>form");
    let formNewArrival = document.querySelector("#formNewArrival");
    newArrivalForm.addEventListener("submit", () => {
        event.preventDefault();
        formNewArrival.innerHTML = "";
        let h2Thank = document.createElement("h1");
        let paraNotified = document.querySelector("p");
        h2Thank.innerText = `Thanks for Signing Up!`;
        paraNotified.innerText = `You'll be the first one to know about our new arrivals, amazing offers and everything else!`;
        formNewArrival.append(h2Thank, paraNotified);
    });