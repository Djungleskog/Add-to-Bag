const express = require('express');

let app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.post();
app.get();

let port = 3000;
app.listen(port, function() {
  console.log('listening');
});