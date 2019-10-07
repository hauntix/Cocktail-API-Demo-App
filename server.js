const express = require('express');
const app = express();

app.use(express.static('www'));

	app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.set('port', process.env.PORT || 5000);

app.get('*',function (req, res) {
	res.sendFile(__dirname + '/www/index.html')
});

app.listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});
