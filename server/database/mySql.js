const mysql = require('mysql');
var connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'IKEA'
});
connection.connect(function(err) {
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log('connected');
});
var getProduct = function (callback) {
};
var getStore = function (name, description, callback) {
};

module.exports.getCows = getProduct;
module.exports.addCows = getStore;