const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const userObject = {
        id: uuidv4(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()
    };
    return userObject;
};

const createCompany = () => {
    const companyObject = {
        id: uuidv4(),
        name: faker.company.name(),
        address: {
            country: faker.location.country(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            street: faker.location.street()
        }
    };
    return companyObject;
};

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    return res.json({ user: newUser, company: newCompany });
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    return res.json(newCompany);
});

// Route to create a new user
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    return res.json(newUser);
});

// Route to create a fake user
app.get('/api/createcompany', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// Route to create a fake company
app.get('/api/createUser', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
