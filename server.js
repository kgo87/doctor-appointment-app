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

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client/build/index.html"));
    });
  }

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node server listening on port ${port}`));