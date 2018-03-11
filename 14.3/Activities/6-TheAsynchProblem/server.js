console.log('Before server/orm.js');
var orm = require("./config/orm.js");
console.log('After server/orm.js');

console.log('Before server/orm.selectWhere');

var data = orm.selectWhere("parties", "party_type", "grown-up",
    selectWhereCallback);
console.log('After server/orm.selectWhere');

console.log('Before server/selectWhereCallback');
function selectWhereCallback(mySQLDataResult) {
    console.log('INSIDE  server/selectWhereCallback');
    console.log('Result', mySQLDataResult);
}
console.log('After server/selectWhereCallback');
// console.log(data); // Data is undefined. Why?

var data = orm.selectWhere("parties", "party_type", "grown-up",function (data){
    console.log('Anonymous function data = ', data);
});
