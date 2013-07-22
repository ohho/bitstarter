var express = require('express');
var app = express();
app.use(express.logger());

var buffer = new Buffer ('test');

/*fs.writeFile('index.html', buffer, function (err) {
	if (err) throw err;
	console.log('It\'s saved!');
});
*/
app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
