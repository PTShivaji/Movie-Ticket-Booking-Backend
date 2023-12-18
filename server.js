const express = require("express");
const app = express();
const path = require("path")
require("dotenv").config({path:path.resolve( '../.env')});
const dbConfig = require("./config/dbConfig")

app.use(express.json())

const usersRoute = require("./routes/usersRoute");
const moviesRoute = require("./routes/moviesRoute");
const theaterRoute = require("./routes/theatersRoute")

app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/theaters", theaterRoute);

const port = process.env.PORT || 5000;

__dirname = path.resolve();

app.listen(port, () => {
console.log(`Nodejs server running on port ${port}`); 
})


console.log(process.env.mongo_url)