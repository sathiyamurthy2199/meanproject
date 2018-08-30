const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

// create express app
const app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/client'));

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
<<<<<<< HEAD
mongoose.connect(dbConfig.url)
=======
mongoose.connect(dbConfig.url,  {useNewUrlParser: true})
>>>>>>> 1de99c9... all commited!
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

<<<<<<< HEAD
 // define a simple route
 // app.post('/', function(req, res){
 //     res.sendFile(__dirname + '/' + '../client/login.html');
 // });

=======
>>>>>>> 1de99c9... all commited!
require('./server/routes/user.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
