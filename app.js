// create a new server 
//
const http = require('http');

http.createServer(function(req, res) {
res.write(" The time is March 7th . 9:51 pm . Just worked with the alarm monitor and armed the doorp. PPNorCal Employee Database and web application. It's a full stack application");
	res.end();

	


}
).listen(3000);

console.log("Server started on port 3000");
