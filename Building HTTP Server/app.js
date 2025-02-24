import http from 'http';
import fs from 'fs';

const PORT= 3000;

//create a server
const server= http.createServer((req, res) => {
    const log= `${new Date().toLocaleString()}= New request invoked \n`;

    fs.appendFile('demo.txt', log, (err, data) => {
        
        //using switch case for url
        switch(req.url) {
            case '/':
                res.end('Homepage');
                break;
            case '/about':
                res.end('Welcome to United Codes');
                break;
            default:
                res.end('404 Not Found');    
        }
        
    })  
    
});

//server is listening in defined port
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
});

