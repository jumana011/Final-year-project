const express = require ('express');
const ejs = require('ejs');
const bodyParser = require ('body-parser');
const mysql = require('mysql');
const request=require('request');
const chatRoutes = require('./routes/chat/chatRoutes');
const nlpManager = require('./routes/nlp/nlp.config');

const app = express()
const port = 7000


//redirects to chatroutes when there is a request for /chatbot route
app.use('/chatbot', chatRoutes);

//triggers the train and saves the output of training when app is initialised
nlpManager.train().then(() => {
  nlpManager.save();
});
app.use(bodyParser.urlencoded({ extended: true }))

// Set up css
app.use(express.static(__dirname + '/public'));

// Set the directory where Express will pick up HTML files
// __dirname will get the current directory
app.set('views', __dirname + '/views');

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');

// Tells Express how we should process html files
// We want to use EJS's rendering engine
app.engine('html', ejs.renderFile);

// Define our data
var AppData = {AppName: "Healthified"}

// Requires the main.js file inside the routes folder passing in the Express app and data as arguments.  All the routes will go in this file
require("./routes/main")(app,AppData);

// Define the database connection
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'appuser',
    password: 'app2027',
    database: 'healthified'
});
// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// Start the web app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))