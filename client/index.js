const send = document.getElementById("fetchPost");

const nameInput = document.getElementById("name");

const passwordInput = document.getElementById("password");

const next = document.getElementById("next");

const error = document.getElementById("errorBox");

error.style.display = "none";

let user = "", password = 0;

nameInput.addEventListener("change", (e) => {
    user = e.target.value;
})

passwordInput.addEventListener("change", (e) => {
    password = e.target.value;
})

send.addEventListener("click", () => {
    fetch("http://192.168.0.15:3001/CreateUser", {
        method: "POST",
        body: JSON.stringify({
            name: user,
            password: password
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((res) => res.json()).then((json) => {
        if(Object.keys(json).length > 0) {
            error.style.display = "block";
            error.innerText = `Error: ${json[Object.keys(json)[0]]}`;
            send.style.display = "none";
            nameInput.style.display = "none";
            passwordInput.style.display = "none";
        }
    }).catch((error) => {
        send.style.display = "none";
        nameInput.style.display = "none";
        passwordInput.style.display = "none";
        next.style.display = "block";
    })
})