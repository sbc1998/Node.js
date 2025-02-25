const express = require("express");
const app = express();

// Apply login middleware globally
app.use(login);

app.get('/', (req, res) => {
    console.log('Home page');
    res.send('Welcome to the Home Page!');  
});

// Apply auth middleware only to /user route
app.get('/user',auth, (req, res) => {
    console.log(`Welcome to Admin: ${req.admin}`);
    console.log('User page');
    res.send('Welcome to User');
});

// Middleware functions
function login(req, res, next) {
    console.log('Users logged in');
    next();
}

function auth(req, res, next) {
    if(req.query.admin === 'avicii') {
        req.admin= 'Tim Bergling';
        next();
    }
    else {
        res.send('oops! authorization failed');
    }
}

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
