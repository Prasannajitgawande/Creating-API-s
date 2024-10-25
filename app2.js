/*

To store names and last names in an array and manage them using your APIs, you can modify your Express application to include a simple in-memory data structure. Here’s how to do it:

Updated app.js with In-Memory Storage
javascript
Copy code
const express = require('express');
const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for names and lastnames
let people = [];

// Home route
app.get('/', (req, res) => {
    res.send('This is the home page');
});

// GET all people
app.get('/people', (req, res) => {
    res.json(people);
});

// GET a specific person by index
app.get('/people/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < people.length) {
        res.json(people[index]);
    } else {
        res.status(404).send('Person not found');
    }
});

// POST to add a new person
app.post('/people', (req, res) => {
    const { name, lastname } = req.body;
    if (name && lastname) {
        people.push({ name, lastname });
        res.status(201).send(`Added: ${name} ${lastname}`);
    } else {
        res.status(400).send('Name and lastname are required');
    }
});

// PUT to update a person by index
app.put('/people/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const { name, lastname } = req.body;

    if (index >= 0 && index < people.length) {
        if (name) people[index].name = name;
        if (lastname) people[index].lastname = lastname;
        res.send(`Updated: ${people[index].name} ${people[index].lastname}`);
    } else {
        res.status(404).send('Person not found');
    }
});

// DELETE to remove a person by index
app.delete('/people/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < people.length) {
        const deletedPerson = people.splice(index, 1);
        res.send(`Deleted: ${deletedPerson[0].name} ${deletedPerson[0].lastname}`);
    } else {
        res.status(404).send('Person not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
Explanation of the New APIs
In-Memory Array: let people = []; is used to store the names and last names.

GET /people: Returns the entire list of people.

Example: Access via Postman or browser:
bash
Copy code
GET http://localhost:4000/people
GET /people/:index: Returns a specific person by their index in the array.

Example: Access via Postman:
bash
Copy code
GET http://localhost:4000/people/0
POST /people: Adds a new person to the array.

Body:
json
Copy code
{
    "name": "Alice",
    "lastname": "Smith"
}
Example: Send a POST request with JSON body to:
bash
Copy code
POST http://localhost:4000/people
PUT /people/:index: Updates an existing person by their index.

Body:
json
Copy code
{
    "name": "AliceUpdated",
    "lastname": "SmithUpdated"
}
Example: Send a PUT request to:
bash
Copy code
PUT http://localhost:4000/people/0
DELETE /people/:index: Removes a person from the array by their index.

Example: Send a DELETE request to:
bash
Copy code
DELETE http://localhost:4000/people/0
Summary
You now have a simple CRUD application managing a list of names and last names stored in an in-memory array.
Use the specified endpoints to add, retrieve, update, and delete entries.

*/