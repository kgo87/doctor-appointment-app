const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config()
const dotenv=require('dotenv');

const dbConfig = require("./config/dbConfig");

//Usuage
process.env.NAME
console.log(process.env.MONGOURL);

app.listen(port, () => console.log(`Node server listening on port ${port}`));