// create a new server 
//
const http = require('http');

http.createServer(function(req, res) {
res.write(". It's actually March 6th now and this is pulling down to my DigitalOcean server. PPNorCal Employee Database and web application. It's a full stack application");
	res.end();

	


}
).listen(3000);

console.log("Server started on port 3000");
