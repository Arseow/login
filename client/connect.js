const nameInput = document.getElementById("name");

const passwordInput = document.getElementById("password");

const connect = document.getElementById("connect");

const profile = document.getElementById("profile");

const welcomeText = document.getElementById("welcome");

const connectDiv = document.getElementById("connect");

const textFromUser = document.getElementById("text");

const submit = document.getElementById("submit");

let user = "", password = 0, data;

nameInput.addEventListener("change", (e) => {
    user = e.target.value;
})

passwordInput.addEventListener("change", (e) => {
    password = e.target.value;
})

connect.addEventListener("click", () => {
    fetch("http://192.168.0.15:3001/").then((res) => res.json()).then((json) => {
        let result = json.filter((object) => object.password === password && object.name === user);
        if(result.length != 0) {
            result[0].name
            user[0].toUpperCase()
            connectDiv.style.display = "none";
            profile.style.display = "block";
            welcomeText.innerText = `Welcome ${user}`;
        }
    });
})