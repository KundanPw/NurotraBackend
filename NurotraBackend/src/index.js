const express = require("express");
const {ServerConfig, Logger} = require('./config');


var app = express();


app.listen(ServerConfig.PORT, function () {
    console.log(`Server is running at port ${ServerConfig.PORT}`);
    Logger.info("Successfully sever is started");
});