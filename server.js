const express = require("express")
const path = require("path")

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

app.get("/*", 
    (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
// takes incoming root requests and responds with the index.html

app.listen(process.env.PORT || 3000, () => console.log("Server Running..."));