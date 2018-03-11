console.log('Before Connection');
var connection = require("../config/connection.js");
console.log('After Connection');

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol, localNameofWhereCallBack) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      console.log('Before selectWhere.query');
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        console.log('Before selectWhere.query.callback');
        localNameofWhereCallBack(result);
        console.log('After selectWhere.query.callback')
    });
  }
};

module.exports = orm;
