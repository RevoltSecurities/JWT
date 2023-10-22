const express = require("express");
const jwt = require("jsonwebtoken");

const secret = "secret123";

const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "user" && password === "user") {
        return res.json({
            token: jwt.sign({ userid: "user" }, secret),
        });
    }

    if (username === "admin" && password === "admin") {
        return res.json({
            token: jwt.sign({ userid: "admin" }, secret),
        });
    }

    return res.status(401).json({ error: "Unauthorized access. Please check the username and password." });
});

app.get("/dashboard", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ error: "Unauthorized access" });

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        return res.status(200).json({ message: `Welcome to your dashboard ${req.user.userid}` });
    } catch (e) {
        return res.status(400).json({ error: "Invalid token" });
    }
});

app.listen(8080, () => {
    console.log("Local host server started to running on port 8080 with http://127.0.0.1:8080");
});


// make login request to grab jwt token for admin if want to login as user change userid and passoword to user:

//  curl -X POST -H "Content-Type: application/json" -d '{"username":"admin","password":"admin"}' http://localhost:8080/login 

//  make login request to dashboard with authenticated jwt token

// curl -H "Authorization: Bearer {YOUR JWT TOKEN}" http://localhost:8080/dashboard