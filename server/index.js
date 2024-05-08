const express = require("express");
const router = require("./routes/user");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/medical");
app.use(cors());
app.use(cookieParser());
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(PORT, () => console.log(`server is running at port : ${PORT}`));
