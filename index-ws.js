const express = require('express');
const server = require('http').createServer();
const app = express();

app.get("/", function(req, res)  {
res.sendFile('index.html', {root:__dirname});



});



server.on('request', app);  // this server is the one down below on line 18
server.listen(3000, function(){console.log("server started on port 3000");});

process.on('SIGINT', () => {
    wss.clients.forEach(function each(client) {
        client.close();
    });
    server.close(()    => {
        shutdownDB();
    })
})


/**Web Socket  */
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({server:server});  // this server is attatched to the server we created up above on line 12

wss.on('connection', function connection(ws) {
// we created a listener
// we created a web socket server attatched to our express server
// we gave the web socket server attatched to our express server a function called connection

// this web socket server called connection is attached to our express server
const numClients = wss.clients.size;
console.log('Clients connected', numClients);

wss.broadcast(`current visitors: ${numClients}`);

if(ws.readyState === ws.OPEN) {
    ws.send('Welcome to my server');
}

db.run(`INSERT INTO visitors (count, time)
        VALUES (${numClients}, datetime('now')  )


`);





ws.on('close', function close()  {
    wss.broadcast(`current visitors: ${numClients}`);
    console.log('A client has disconnected');
});

});

wss.broadcast = function broadcast (data) {
    wss.clients.forEach(function each(client) {
        client.send(data);
        
    });
}

/** end Web Sockets*/

/** Begin Database */

const sqlite = require('sqlite3');
const db = new sqlite.Database(':memory:');
db.serialize(()  => {
    db.run(` 
        CREATE TABLE visitors(
            count INTEGER, 
            time TEXT
        ) 
        
        `)
});

function getCounts() {
    db.each("SELECT * FROM visitors", (err, row) => {
        console.log(row);
    })
}

function shutdownDB() {
    getCounts();
    console.log("Shutting Down");
    db.close();
}