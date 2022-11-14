const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

require('dotenv').config()
const dotenv=require('dotenv');

const dbConfig = require("./config/dbConfig");

const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);


//Usuage
process.env.NAME
console.log(process.env.MONGOURL);

app.listen(port, () => console.log(`Node server listening on port ${port}`));