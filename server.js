const express = require("express");
const ip = require("ip");

const app = express();
const PORT = 3000

//it will give me the ip of server
const serverIp = ip.address();
app.get('/',(req,res)=>{
    res.send({
        "ping" : "pong",
        "message" : serverIp
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})