// index.js

/**
 * Required External Modules
 */

 const express = require("express");
 const path = require("path");

 /**
 * App Variables
 */

/**
 *  App Configuration
 */

const app = express();
const port = process.env.PORT || "8000";
const request = require("request")


 /**
 * Routes Definitions
 */
  
app.get("/", (req, res) => {
    data = request_poe();
    console.log(data)
    res.status(200).send(data);
});

/**
 * Server Activation
 */

 app.listen(port, () => {
    

    console.log(`Listening to requests on http://localhost:${port}`);
  });

/**
 * Functions
 */

function request_poe() {
    return request('https://poe.ninja/api/data/currencyoverview?league=Scourge&type=Currency', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        return body;
    });
}