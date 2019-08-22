var app = require('express')(),

    Config = require("./config"),
    helmet = require('helmet'),
    port = process.env.PORT || Config.port,
    ENV = process.env.NODE_ENV || Config.env,
    bodyParser = require("body-parser")

    fs = require('fs');

    var path = require('path');
    mongoose = require('mongoose')


// handle cross domain issues - CORS
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, userId, Authorization, Accept,Content-Length, X-Requested-With, X-PINGOTHER');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowCrossDomain);

var server = require('http').Server(app),
    routes = require('./routes/route')(app)

    require("./config/mongoose")(app)



app.set("env", ENV);
app.use(helmet({
    frameguard: {
        action: 'deny'
    }
}));



server.listen(port, () => {
    console.log('Server listening at', port)
});
// WARNING: app.listen(80) will NOT work here!
