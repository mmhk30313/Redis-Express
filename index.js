const express = require("express");
const axios = require("axios");
const redis = require("redis");
const app = express();
const dotenv = require("dotenv");
const redisPort = 6379
const client = redis.createClient(redisPort);
const cors = require('cors');
const bodyParser = require("body-parser");
dotenv.config();
client.on("error", (err) => {
    console.log(err);
});

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cors({origin: true}));

app.listen(process.env.PORT || 3000, () => {
    console.log("Node server started");
});