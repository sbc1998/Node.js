const http= require('http');

const server= http.createServer((req, res)=>{
    if (req.url==='/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1> Welcome to Node.js tutorial </h1>');
        res.end();
    }
    if (req.url === '/playlist') {
        res.setHeader('Content-Type', 'text/plain');
        res.write('Check the following playlist: \nEvent Loop and Asynchronous Programming\nExpress.js Framework\nFile System (fs) Module\nStreams in Node.js\nHTTP Module and Request Handling');
        res.end(); 
    }
    
});

const PORT= 3000;
server.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`);
});

