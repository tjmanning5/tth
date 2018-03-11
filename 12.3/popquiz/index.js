var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'breakfast'
});
//connection.connect(function(err) {
//	if (err) throw err;
//	console.log('Connected!', connection.threadId);
//});

connection.query('SELECT * FROM `food`', function (err, res) {
	if (err) throw err;
	console.log('Foods', res);
});

connection.query('SELECT * FROM `food` LIMIT 1', function (err, res) {
	if (err) throw er;
	console.log('Food', res);
});
connection.end(function() {
	console.log('quitted');
});

