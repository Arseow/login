const express = require("express");

const parser = require("body-parser");

const cors = require("cors");

const app = express();

let jsonParser = parser.json();

let users = [];

app.use(cors());

app.get("/", (req, res) => {
    res.json(users);
})

app.post("/CreateUser", jsonParser, (req, res) => {
    let user = req.body;
    let result = users.filter((object) => object.name === user.name);
    if(result.length > 0) {
        res.json({
            "error": "name is used"
        })
    }
    else {
        users.push({
            name: user.name,
            password: user.password
        });
        res.send("send");
    }
})

app.listen(3001);