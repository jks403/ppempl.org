// create a new server 
//
const http = require('http');

http.createServer(function(req, res) {
res.write(" The time is March 11th 10:49 pm. Just did 4 monitor installs and checked serial numbers . PPNorCal Employee Database and web application. It's a full stack application");
	res.end();

	


}
).listen(3000);

console.log("Server started on port 3000");
