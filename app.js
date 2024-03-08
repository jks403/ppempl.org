// create a new server 
//
const http = require('http');

http.createServer(function(req, res) {
res.write(" The time is March 7th . Just worked with Fang and Lee and working on his new Laptop. PPNorCal Employee Database and web application. It's a full stack application");
	res.end();

	


}
).listen(3000);

console.log("Server started on port 3000");
