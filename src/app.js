const express = require('express');
const path = require('path');

const app = express();

//Server

app.set("port",process.env.PORT || 3500)

app.listen(app.get("port"),() => console.log("Server Start http://localhost:"+app.get("port")))



//Public Access
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

//Web Access
app.use(require("./routes/web"));