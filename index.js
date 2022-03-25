const express = require("express");
// const axios = require("axios");
// const redis = require("redis");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require("body-parser");
// API PATH
const rootPath = require("./routes/root");
dotenv.config();

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cors({origin: true}));
app.use(rootPath);

app.listen(process.env.PORT || 3000, () => {
    console.log("Node server started");
});