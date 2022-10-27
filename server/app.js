const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");


mongoose.connect('mongodb://localhost:27017/videogames')


app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const videojuegos = require("./routes/videojuegos.routes")
app.use("/", videojuegos)

const consolas = require("./routes/consolas.routes")
app.use("/consolas", consolas)





app.listen(5005, ()=> console.log("app on!"))
module.exports= app;