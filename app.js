// create a new server 
//
const http = require('http');

http.createServer(function(req, res) {
res.write("This is March 5th, 2024 11:57 PM. PPNorCal Employee Database and web application. It's a full stack application");
	res.end();

	


}
).listen(3000);

console.log("Server started on port 3000");
