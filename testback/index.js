const express = require("express");

const app = express();

const port = 2000;

app.get('/', (req, res) => {
    return res.send("Hello World");
});

app.listen(port, () => {
    return console.log("Bismillah Auto Solution");
});