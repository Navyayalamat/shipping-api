const express = require("express")
const axios = require('axios');
var app = express();
const cors = require('cors');

const myURL = new URL('https://abc-fashion-bzwn2mw5ya-km.a.run.app/');

const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000'] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions));

  
app.listen(10000, function () {
    console.log("Started application on port %d", 10000)
});


app.get('/', function(req, res) {
    let url = `${myURL}/shipments`;
    axios({
        method:'get',
        url,
        auth: {
            username: 'pipelabs',
            password: 'h04Kp5NNm4qN'
        }
    })
    .then(function (response) {
        console.log("res", response.data)
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
});
