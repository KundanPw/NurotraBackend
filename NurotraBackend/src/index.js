const express = require("express");
const {ServerConfig, Logger} = require('./config');

const apiRoutes = require('./routes');
const { sequelize } = require('./models');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true})); // only for postman

app.use('/api', apiRoutes);


app.listen(ServerConfig.PORT, function () {
    sequelize.authenticate();
    console.log('Database connected');
    console.log(`Server is running at port ${ServerConfig.PORT}`);
    //Logger.info("Successfully sever is started");
});