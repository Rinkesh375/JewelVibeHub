let form = document.querySelector("#signIn>form");
    let inputs = document.querySelectorAll("#signIn>form>input");
    let h4 = document.querySelector("h4");
    let csData = JSON.parse(localStorage.getItem("customer")) || [];
    const checkEmail = (email) => {
        for (let ele of csData) {
            if (ele.email === email) {
                return true;
            }
        }
        return false
    }

    form.addEventListener("submit", () => {
        event.preventDefault()

        let tempObj = {
            name: inputs[0].value,
            email: inputs[1].value,
            password: inputs[2].value,
        }
        let result = checkEmail(tempObj.email)
        if (result) {
            h4.innerText = "This email already exist"
            h4.style.color = 'red'
            // window.location = "http://127.0.0.1:5500/index.html"
            setTimeout(() => {
                h4.innerText = ''
            }, 10000);
        }
        else {
            csData.push(tempObj)
            localStorage.setItem('customer', JSON.stringify(csData))
            h4.innerText = "Your Account has been created successfully"
            h4.style.color = 'green'
            // window.location = "http://127.0.0.1:5500/index.html"
            setTimeout(() => {
                h4.innerText = ''
            }, 5000);
        }


    })