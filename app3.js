const express = require('express');
const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is the home page');
});


app.get('/post',(req, res)=>{
    const name = req.query.name;
    const lastname = req.query.lastname;
    res.send(`The name is ${name} and the last name is ${lastname}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
