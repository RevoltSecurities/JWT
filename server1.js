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

    return res
        .status(401)
        .json({ message: "Unauthorized access detected. Please check the username and password." });
});

app.get("/dashboard", (req, res) => {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) return res.status(401).json({ error: 'Unauthorized access' }); // Send JSON response

    try {
        const decoded = jwt.decode(token, secret);
        req.user = decoded;
    } catch (e) {
        return res.status(400).json({ error: 'Invalid token' }); // Send JSON response
    }

    return res
        .status(200)
        .json({ message: `Welcome to your dashboard ${req.user.userid}` }); // Send JSON response
});


app.listen(8080, () => {
    console.log("Local host server started to running on port 8080 with http://127.0.0.1:8080");
});
