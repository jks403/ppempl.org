// create a new server 
//
const http = require('http');
const {Client} = ('pg');

const express = require('express');
const app = express();
app.use(express.urlencoded());

app.get('/', function(req, res)  {
	res.send('')
})

http.createServer(function(req, res) {
res.write(" The TIme is March 14 2024. 9:49 am. I am adding the PostGreSQL database connection Jem just showed us to save in the container file and to do some  a full stack application");
	res.end();

	


}
).listen(3000);

console.log("Server started on port 3000");
