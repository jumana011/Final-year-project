var express = require ('express');
var ejs = require('ejs');
var bodyParser= require ('body-parser');
var mysql = require('mysql');

const app = express()
const port = 7000

app.use(bodyParser.urlencoded({ extended: true }))

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');

// Tells Express how we should process html files
// We want to use EJS's rendering engine
app.engine('html', ejs.renderFile);

// Start the web app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))