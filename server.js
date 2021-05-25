//Used Node Server for rapid prototyping, while dealing with rolling-back Rails to 6.0.x
const express = require("express")
const path = require("path")

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

// takes incoming root requests and responds with the index.html
app.get("/*", 
    (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

// Tells the express application the Port value to use for the server, and pushes the console log message when the event occurs so
app.listen(process.env.PORT || 3000, () => console.log("Server Running..."));