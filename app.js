// create a new server 
//
const http = require('http');

http.createServer(function(req, res) {
res.write(" The time is March 12th, 2024. 12:41 am. I am trying to save this in my app.js file. Jem just showed us to save in the container file and to do some  a full stack application");
	res.end();

	


}
).listen(3000);

console.log("Server started on port 3000");
