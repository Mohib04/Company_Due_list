const express = require("express");

const app = express();

const port = 2000;

app.get('/gm', (req, res) => {
    return res.send("This page only for Genaral Manager sir MD Alomgir Mirdha");
});
app.get('/m', (req, res) => {
    return res.send("This page only for Manger MD Pintu");
});
app.get('/', (req, res) => {
    return res.send("Welcome to Bismillah Auto Solution");
});
app.get('/signin', (req, res) => {
    return res.send("Please Sign In first")
})
app.get('/signup', (req, res) => {
    return res.send("This is signup Page");
});

app.listen(port, () => {
    return console.log("App is runnig at 2000 port");
});