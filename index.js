// Env
process.env.NODE_ENV="production";

// Libraries
const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

// Server instance
const app = express();

// Middlewares
app.use(compression());
app.use(helmet());
app.use(cors({
    origin: "https://slicklearn.xyz",
    optionsSuccessStatus: 200
}))

// Define static path
app.use(express.static(__dirname + "/public", {
    maxAge: "600000"
}));

// Handle 404
app.all("*", (req, res) => {
    res.status(404);
    res.send("<style>body{background-color:#222;color:#ddd;text-align:center; width:40%;margin:auto;margin-top:4%;font-family:Arial;}</style><h1>404 Not Found</h1><p>No file for deliver found</p><hr><i>Slicklearn CDN</i>");
    res.end();
})

// Listen server
app.listen(3000, () => {
    console.log("CDN Listening at port 3000");
})