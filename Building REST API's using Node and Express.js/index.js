const express= require("express");
const users= require("./MOCK_DATA.json");
const fs= require("fs");

const app= express();
app.use(express.json());

//routes
app.get('/api/users', (req, res) => {
    res.json(users);    
});

app.get('/users', (req, res) => {
    let htmlContent= ''
    users.forEach((item, index) => {
        htmlContent += `<ul> <li> <h3>${item.first_name}</h3> </li> </ul>`;
    })
    res.send(htmlContent);
});

app.get('/api/:id', (req, res) => {
    const id= Number(req.params.id);
    res.send(users.find((item) => {
        return item.id === id;
    }));
});

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const { job_title }= req.body;

    const userIndex = users.findIndex((item) => item.id === id);
    
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users[userIndex].job_title = job_title || "Software Developer";

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ message: "Error saving data", error: err });
        }
        res.json({ message: "User updated successfully", user: users[userIndex] });
    });
});

//server is listening: knock knock...
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
