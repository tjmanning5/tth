var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = 3001;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "",
    database: "quotes_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// TODO
// Express and MySQL code should go here.
//    app.???
//    app.???
//    app.???

//HOME PAGE
app.get('/', function(req, res) {
    connection.query('SELECT * from `quotes`', function(err, data) {
        if (err) {
            throw err;
        }
        res.render('index', {
            quotes: data
        })
    });
});

//CREATE a QUOTE
app.post('/', function(req, res) {
    connection.query('INSERT INTO `quotes` (`quote`, `author`) VALUES (?, ?)',
        [req.body.quote, req.body.author], function(err, data) {
            if (err) {
                throw err;
            }

            res.redirect('/' + data.insertId);
        });
});
//SHOW FORM TO EDIT
app.get('/:id', function(req, res) {
    connection.query('SELECT * FROM `quotes` WHERE `id` = ?', [req.params.id],
        function(err, data) {
            if (err) {
                throw err;
            }
            console.log('data', data);
            res.render('single_quote', data[0]);
        });
});
//UPDATE a QUOTE
app.put('/', function(req, res) {
    console.log('BODY', req.body);
    connection.query(
        'UPDATE `quotes` SET `quote` = ?, `author` = ? WHERE id= ?',
        [req.body.quote, req.body.author, req.body.id], function(err, data) {
            if (err) {
                throw err;
            }
            res.redirect('/');
        });
});

//DELETE a QUOTE
app.delete('/:quoteID', function(req, res) {
    console.log('DELETE:', req.params.quoteID);
    connection.query('DELETE FROM `quotes` WHERE `id` = ?',
        [req.params.quoteID], function(err, result) {
            console.log('MySQL result', result);
            res.redirect('/');
        });
});

app.listen(port, function() {
    console.log("Listening on PORT " + port);
});
