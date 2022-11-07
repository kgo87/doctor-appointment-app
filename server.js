const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

require('dotenv').config()
const dotenv=require('dotenv');

const dbConfig = require("./config/dbConfig");

const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);


//Usuage
process.env.NAME
console.log(process.env.MONGOURL);

app.listen(port, () => console.log(`Node server listening on port ${port}`));