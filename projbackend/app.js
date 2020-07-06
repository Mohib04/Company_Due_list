require('dotenv').config()
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = requie("body-parser");
const cookiParser = require("cookie-parser");
const cors = require("cors");

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("BD CONNECTED");
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`);

});