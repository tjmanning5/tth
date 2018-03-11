var mysql = require("mysql");

var connection = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "",
    database: "pets_db",
    debug   : true
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// Object Relational Mapper (ORM)

var orm = {
    selectWhere   : function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol],
            function(err, result) {
                console.log(result);
            });
    },
    selectAndOrder: function(whatToSelect, table, orderCol, orderBy) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ??" + orderBy;
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol],
            function(err, result) {
                console.log(result);
            });
    },
    findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne,
        tableTwo) {
        var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

        connection.query(queryString,
            [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo,
                tableTwoForeignKey, tableOne, tableOneCol],
            function(err, result) {
                console.log(result);
            });
    }
};

module.exports = orm;
