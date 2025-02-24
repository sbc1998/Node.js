import express from 'express';

const PORT= 3000;
const app= express();

//routes
app.get('/', (req, res) => {
    res.send('Welcome to Express');
});

app.get('/about', (req, res) =>{
    const user= req.query.user;
    res.send(`Introduction to Express <br> Welcome to ${user}`);
});

//server listening on defined port
app.listen(PORT, () =>{
    console.log(`Server is listening on http://localhost:${PORT}`);
});
