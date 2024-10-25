//Creating simple APIs



const express = require('express');
const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is the home page');
});

// GET API to retrieve name and lastname
app.get('/post', (req, res) => {
    const name = req.query.name;
    const lastname = req.query.lastname;
    res.send(`Received name: ${name}, lastname: ${lastname}`);
});

// PUT API to update name and lastname
app.put('/post', (req, res) => {
    const { name, lastname } = req.body;
    // Here you would typically update the resource in your database
    res.send(`Updated name to: ${name}, lastname to: ${lastname}`);
});

// DELETE API to delete a resource by name
app.delete('/post', (req, res) => {
    const { name } = req.body;
    // Here you would typically delete the resource from your database
    res.send(`Deleted resource with name: ${name}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



/*

Testing with postman

1. Testing the GET Endpoint
Choose GET from the dropdown.
http://localhost:4000/post?name=A&lastname=B
Output - Received name: A, lastname: B

2. Testing the PUT Endpoint
Choose PUT from the dropdown.
http://localhost:4000/post
{
    "name": "NewName",
    "lastname": "NewLastname"
}
Output - Updated name to: NewName, lastname to: NewLastname

3. Testing the DELETE Endpoint
Choose DELETE from the dropdown.
http://localhost:4000/post
{
    "name": "NameToDelete"
}
Output - Deleted resource with name: NameToDelete

*/