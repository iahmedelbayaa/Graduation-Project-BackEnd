// setup server
var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./route/user.route');
var loginRoute = require('./route/login.route');
var transRoute = require('./route/trans.route');
var exportRoute = require('./route/export.route');
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');

var app = express();
const { Server } = require("socket.io");



app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json

app.use(bodyParser.json());

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1" , userRoute);
app.use("/api/v1" , loginRoute);
app.use("/api/v1" , exportRoute);
app.use("/api/v1" , transRoute);


const server= app.listen(4000, () => {
    console.log(`Server start ....... `)
})

module.exports = app
