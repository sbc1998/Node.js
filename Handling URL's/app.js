import http from 'http';
import fs from 'fs';
import url from 'url';

const PORT= 3000;

//create a server
const server= http.createServer((req, res) => {

    const log= `${new Date().toLocaleString()}= New request invoked \n`;
    const myUrl= url.parse(req.url, true)
    fs.appendFile('demo.txt', log, (err, data) => {
        
        if(err) {
            console.log('Error writing to file:', err);
        }             
        //using switch case for url
        switch(myUrl.pathname) {
            case '/':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Homepage');
                break;
            case '/about':
                const user= myUrl.query.name || 'Guest';
                res.end(`Welcome to ${user}`);
                break;
                case '/search':
                const search= myUrl.query.search_keyword || 'No search query provided';
                res.end(`Search results for :${search}`);
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

