const express = require("express");

const app = express();

const port = 2000;


const admin = (req, res) => {
    return res.send("this is admin panel");
};
isAdmin = (req, res, next) => {
    console.log("isAdmin is running");
    next();
}
app.get("/admin", isAdmin, admin);



const login = (req, res) => {
    return res.send("This is login page");
};
isLogin = (req, res, next) => {
    console.log("isLogin is running");
    next();
};
app.get('/login', isLogin, login);



app.get('/gm', (req, res) => {
    return res.send("This page only for Genaral Manager sir MD Alomgir Mirdha");
});
app.get('/m', (req, res) => {
    return res.send("This page only for Manger MD Pintu");
});
app.get('/', (req, res) => {
    return res.send("Welcome to Bismillah Auto Solution");
});

app.get('/signup', (req, res) => {
    return res.send("This is signup Page");
});

app.listen(port, () => {
    return console.log("App is runnig at 2000 port");
});