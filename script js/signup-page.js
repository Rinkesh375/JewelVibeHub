let form = document.querySelector("#signIn>form");
let inputs = document.querySelectorAll("#signIn>form>input");

let h4 = document.querySelector("h4");
let csData = JSON.parse(localStorage.getItem("customer")) || [];
const checkCredentials = (email, password) => {
    for (let ele of csData) {
        if (ele.email === email && password === ele.password) {
            return true;
        }
    }
    return false
}
form.addEventListener("submit", () => {
    event.preventDefault()

    let result = checkCredentials(inputs[0].value, inputs[1].value)
    if (result) {


        window.location = "http://127.0.0.1:5500/index.html"
        setTimeout(() => {
            h4.innerText = ''
        }, 10000);
    }
    else {

        h4.innerText = "Plz enter correct details"
        h4.style.color = 'red'

        setTimeout(() => {
            h4.innerText = ''
        }, 5000);
    }


})