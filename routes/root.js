// First of all you should start redis server in window command prompt
// After that write there           ->> redis-server
// If you use cli for redis command ->> redis-cli

const redisClient = require('../modules/redisClient');
const express = require("express");
const router = express.Router();

// Just simple info for root api endpoint
router.get("/", (_, res) => {
    res.send(`<style>
    *, 
    *:before, 
  *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
    adding: 0;
  }
  
  body {
  background: #435363;
  -webkit-animation: bg 5s infinite alternate;
  -moz-animation: bg 5s infinite alternate;
  -o-animation: bg 5s infinite alternate;
  animation: bg 5s infinite alternate;
  }
  
  @-webkit-keyframes bg {
  0%   { background: #984D6F; }
  100% { background: #435363; }
  }
  @-moz-keyframes bg {
  0%   { background: #984D6F; }
  100% { background: #435363; }
  }
  @-o-keyframes bg {
  0%   { background: #984D6F; }
  100% { background: #435363; }
  }
  @keyframes bg {
  0%   { background: #984D6F; }
  100% { background: #435363; }
  }
  
  h1 {
  padding-top: 380px;
  font-family: 'Joti One', cursive;
  font-size: 3.5em;
  text-align: center;
  color: #FFF;
  text-shadow: rgba(0,0,0,0.6) 1px 0, rgba(0,0,0,0.6) 1px 0, rgba(0,0,0,0.6) 0 1px, rgba(0,0,0,0.6) 0 1px;
  }
</style>
<h1 
  style="padding-top: 280px;
  align-items: center;
  height: 90%;
  overflow-y: hidden;
  text-transform: uppercase;
  font-weight: 600;
  font-family: monospace;
  font-size: 30pt;">
 <p>WELCOME TO REDIS EXPRESS INTEGRATION APP</p>
 <p>To see server api, search by "/api/path"</p>
</h1>`).status(200);
});

// /post/:key/:value -> Store key -> value in redis
router.post('/post/:key/:value', async(req, res) => {
  const {key, value} = req.params;
  if(!key || !value){
    res.status(400).json({
      success: false,
      message: 'Please send your key and value in proper way..."/post/:key/value"'
    });
    return;
  }
  console.log("Line:79:====:",{key, value});
  redisClient
  .then(async(client, err) => {
    if(err){
      res.status(417).json({
        success: false,
        err    : "Sever error",
        message: `Key={${key}} and value={${value}} didn't store in redis`
      })
    }
    const reply = await client.set(key, value);
    console.log("Line:90:====:",{reply});
    if(reply){
      res.status(200).json({
        success: true,
        reply  : reply,
        message: `Key={${key}} and value={${value}} are store in redis`
      });
    }else{
      res.status(500).json({
        success: false,
        message: `Key={${key}} and value={${value}} didn't store in redis`
      })
    }

    // do something with the client
    // const reply = await client.set("Hello", "Await World");
    // this also works, if we don't want to use await
    // client.set("Hello", "Real World").then((err, reply)=> { 
    //    // can do something here 
    // });
    // client.set(key, value, (err, reply) => {
    //   console.log({err, reply});
    //   if(err){
    //     res.status(417).json({
    //       success: false,
    //       err    : "Expectation Failed",
    //       message: `Key={${key}} and value={${value}} didn't store in redis`
    //     })
    //   }
    //   console.log("line:82====:",{reply});
    //   if(reply){
    //     res.status(200).json({
    //       success: true,
    //       reply  : reply,
    //       message: `Key={${key}} and value={${value}} are store in redis`
    //     });
    //   }else{
    //     res.status(500).json({
    //       success: false,
    //       message: `Key={${key}} and value={${value}} didn't store in redis`
    //     })
    //   }
    // });
  });
  
});

// /get/:key -> To get value by key from redis
router.get('/get/:key', async(req, res) => {
  const {key} = req.params;
  if(!key){
    res.status(400).json({
      success: false,
      message: 'Please send your key to get value in proper way..."/get/:key"'
    });
    return;
  }
  console.log("Line:147:====:",{key});
  redisClient
  .then(async(client, err) => {
    if(err){
      res.status(417).json({
        success: false,
        err    : "Sever error",
        message: `Key={${key}} isn't store in redis`
      })
    }
    const reply = await client.get(key);
    console.log("Line:158:====:",{reply});
    if(reply){
      res.status(200).json({
        success: true,
        data  : reply,
        message: `Key={${key}} and value={${reply}} are found in redis`
      });
    }else{
      res.status(500).json({
        success: false,
        message: `Key={${key}} isn't found in redis`
      })
    }
  });
})

module.exports = router;