
let productDisplay = document.querySelector("#product-display");
let productheadingSpan = document.querySelectorAll("#product-heading-right>span");
let csReview = document.querySelector("#cs-review");
let sortPrice = document.querySelector("#sort");
let sortcartegory = document.querySelector("#cartegory");
let manualFilter = document.querySelector("#filter-btn")
let filterInputs = document.querySelectorAll("#filter>input")


let arr =
    [{
        id: 1,
        image: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00168-YG0000_1_lar.jpg",
        discountPrice: 8359,
        actualPrice: 8868,
        description: "Ornate Om Baby Nazaria Gold Bracelet",
        category: "Bracelet"

    },

    {
        id: 2,
        image: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00167-YG0000_1_lar.jpg",
        discountPrice: 7855,
        actualPrice: 8365,
        description: "Swastik Baby Nazaria Gold Bracelet",
        category: "Bracelet"
    },

    {
        id: 3,
        image: "https://cdn.caratlane.com/media/catalog/product/J/E/JE03938-YGP600_1_lar.jpg",
        discountPrice: 8421,
        actualPrice: 10527,
        description: "Love Cursive Gold Kid's Alloys Ring",
        category: "Earnings"
    },

    {
        id: 4,
        image: "https://cdn.caratlane.com/media/catalog/product/J/E/JE06187-1RP600_1_lar.jpg",
        discountPrice: 9396,
        actualPrice: 11744,
        description: "Quad Geometric Diamond Stud Earrings",
        category: "Earnings"
    },

    {
        id: 5,
        image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02084-1YP900_11_listfront.jpg",
        discountPrice: 8702,
        actualPrice: 10237,
        description: "Delicate Quad Diamond Bracelet",
        category: "Chain"
    },

    {
        id: 6,
        image: "https://cdn.caratlane.com/media/catalog/product/U/E/UE04499-1Y0000_1_lar.jpg",
        discountPrice: 5800,
        actualPrice: 6243,
        description: "Magical Unicorn Kids' Gold Earrings",
        category: "Earnings"
    },


    {
        id: 7,
        image: "https://cdn.caratlane.com/media/catalog/product/J/N/JN00048-YGP900_1_lar.jpg",
        discountPrice: 7111,
        actualPrice: 7901,
        description: "Isha Delight Diamond Kid's Alloys Nose Pin",
        category: "Earnings"
    },
    {
        id: 8,
        image: "https://cdn.caratlane.com/media/catalog/product/G/C/GC00032-2Y0000_1_lar.jpg",
        discountPrice: 7643,
        actualPrice: 8673,
        description: "Alloy Gold-plated Jewel Set  (Black, Multicolor)",
        category: "Gold Coin"

    },
    {
        id: 9,
        image: "https://cdn.caratlane.com/media/catalog/product/G/C/GC00010-4Y0000_1_lar.jpg",
        discountPrice: 7943,
        actualPrice: 8673,
        description: "10g, 24Kt Lord Balaji Gold Coin",
        category: "Gold Coin"
    },
    {
        id: 10,
        image: "https://cdn.caratlane.com/media/catalog/product/G/C/GC00053-4Y0000_1_lar.jpg",
        discountPrice: 8243,
        actualPrice: 8673,
        description: "7g, 24Kt Lord Balaji Gold Coin",
        category: "Gold Coin"
    },
    {
        id: 11,
        image: "https://cdn.caratlane.com/media/catalog/product/G/C/GC00029-2Y0000_1_lar.jpg",
        discountPrice: 9643,
        actualPrice: 8673,
        description: "8g, 22Kt Plain Gold Coin",
        category: "Gold Coin"
    },
    {
        id: 12,
        image: "https://rukminim1.flixcart.com/image/832/832/kazor680/jewellery-set/t/y/r/msut1001-prasub-original-imafsfw4rwjbhk2f.jpeg?q=70",
        discountPrice: 12643,
        actualPrice: 8673,
        description: "5g, 22Kt Gold Chain",
        category: "Chain"

    },
    {
        id: 13,
        image: "https://rukminim1.flixcart.com/image/612/612/xif0q/jewellery-set/n/h/7/na-na-cbns104734-sukkhi-original-imagyn8dwwgg5ufy.jpeg?q=70",
        discountPrice: 6643,
        actualPrice: 8673,
        description: "Alloy Gold-plated Jewel Set  (Gold)",
        category: "Necklace"
    },

    {
        id: 14,
        image: "https://rukminim1.flixcart.com/image/612/612/xif0q/necklace-chain/f/8/r/1-skr68959-chain-sukkhi-original-imagj53f54b85yhy.jpeg?q=70",
        discountPrice: 16643,
        actualPrice: 8673,
        description: "Designer Gold-plated Plated Brass Chain",
        category: "Necklace"
    },
    {
        id: 15,
        image: "https://rukminim1.flixcart.com/image/612/612/xif0q/ring/v/m/q/adjustable-1-rose-mkmr106g-ring-myki-original-imaggdywetaf2g3z.jpeg?q=70",
        discountPrice: 85643,
        actualPrice: 8673,
        description: "Exclusive Limited Edition 24KT Gold Swarovski Solitaire",
        category: "Bracelet"
    },
    {
        id: 16,
        image: "https://cdn.caratlane.com/media/catalog/product/U/P/UP00899-1Y0000_1_lar.jpg",
        discountPrice: 8186,
        actualPrice: 7895,
        description: "Fashionable Evil Eye Gold Pendant",
        category: "Necklace"
    },


    {
        id: 17,
        image: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00684-1Y0000_1_lar.jpg",
        discountPrice: 7191,
        actualPrice: 7500,
        description: "Infinity Love Adjustable Gold Bracelet",
        category: "Bracelet"
    },


    {
        id: 18,
        image: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00702-1Y0000_1_lar.jpg",
        discountPrice: 6692,
        actualPrice: 7799,
        description: "Chopper Personalised Kids' Gold Bracelet",
        category: "Bracelet"
    },


    {
        id: 19,
        image: "https://cdn.caratlane.com/media/catalog/product/U/P/UP00058-YG0000_1_lar.jpg",
        discountPrice: 6319,
        actualPrice: 7169,
        description: "Daddy's Princess Kids' Gold Pendant",
        category: "Necklace"
    },

    {
        id: 20,
        image: "https://cdn.caratlane.com/media/catalog/product/U/E/UE04784-YG0000_1_lar.jpg",
        discountPrice: 9449,
        actualPrice: 9789,
        description: "Saima Cutout Gold Drop Earrings",
        category: "Earnings"
    },

    {
        id: 21,
        image: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00842-1Y0000_1_lar.jpg",
        discountPrice: 7643,
        actualPrice: 8673,
        description: "Butterflies Baby Nazaria Gold Bracelet",
        category: "Bracelet"
    },


    {
        id: 22,
        image: "https://cdn.caratlane.com/media/catalog/product/U/E/UE04655-1Y0000_6_lar.jpg",
        discountPrice: 5635,
        actualPrice: 6078,
        description: "Enchanted Unicorn Kids' Gold Earrings",
        category: "Earnings"
    },

    {
        id: 23,
        image: "https://cdn.caratlane.com/media/catalog/product/U/R/UR00681-1Y0000_1_lar.jpg",
        discountPrice: 9862,
        actualPrice: 10233,
        description: "Trillium Diamond Stud couple Earrings",
        category: "Bracelet"

    },
    {
        id: 24,
        image: "https://cdn.caratlane.com/media/catalog/product/G/C/GC00043-4Y0000_1_lar.jpg",
        discountPrice: 9529,
        actualPrice: 10089,
        description: "Saima Cutout Gold Drop Earrings",
        category: "Gold Coin"
    }
    ];

displayProduct(arr);

// product display start here
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

// for sorting item by their price according to ascending and descendign order
sortPrice.addEventListener("change", () => {

    if (sortPrice.value === 'asc') {

        arr.sort((a, b) => a.discountPrice - b.discountPrice)

        displayProduct(arr)
    }
    else if (sortPrice.value === 'desc') {
        arr.sort((a, b) => b.discountPrice - a.discountPrice)
        displayProduct(arr)
    }
    else {
        displayProduct(arr)
    }
})


// for sorting item by their category
sortcartegory.addEventListener("change", () => {
    let filter = arr.filter((element) => {
        if (element.category === sortcartegory.value) {
            return element
        }
    });
    displayProduct(filter)
})


//   when someOne wants to have products according to his price range
manualFilter.addEventListener("click", () => {
    let filter = arr.filter((element) => {

        if (element.discountPrice >= (Number(filterInputs[0].value)) && (Number(filterInputs[1].value)) >= element.discountPrice) {
            return element
        }
    });

    displayProduct(filter)
})
displayProduct(arr)

// when someOne click on searchBtn start

let searchInput = document.querySelector("#nav-right>form>input");
let searchClickBtn = document.querySelector("#nav-right>form>i");
let searchForm = document.querySelector(".searchForm");

function searchItems() {

    let inputFilter = arr.filter((element) => element.description.toLowerCase().includes(searchInput.value.toLowerCase()))
    displayProduct(inputFilter)
}
searchForm.addEventListener("submit", () => {
    event.preventDefault()
    searchItems()

})

searchClickBtn.addEventListener("click", ()=>{
    searchItems()
})





