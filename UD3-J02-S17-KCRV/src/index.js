const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");

//SETTINGS
const app = express();
const port = process.env.PORT || 9000;

// MIDDLEWARES
app.use(express.json());
app.use("/api", userRoute);

//ROUTES
app.get("/", (req,res) => {
    res.send("Welcome to my API")
});

//MONGODB CONNECTION
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

//SERVER LISTENING
app.listen (port, () => console.log("server listening to", port));