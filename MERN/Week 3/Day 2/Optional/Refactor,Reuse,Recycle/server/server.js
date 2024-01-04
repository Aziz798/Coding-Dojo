const express = require('express');
const app =express();
require('dotenv').config()
const port = process.env.port;
const cors = require("cors");

app.use(express.json(),express.urlencoded({extended:true}),cors());

require("./config/mongoose.config");

require("./routes/products.routes")(app);


app.listen(port,()=>console.log(`listening to port ${port}`));
