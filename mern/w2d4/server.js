const express = require("express");
const faker = require("faker");
const app = express();

class Fake{
    constructor(){
        this.name = `${faker.name.title()} ${faker.name.firstName()} ${faker.name.lastName()}`;
        this.phrase = faker.hacker.phrase();
        this.number = faker.phone.phoneNumber();
        this.title = faker.name.jobTitle();
        this.slogan = faker.company.catchPhrase();
    }
}

// accept json data in post routes
app.use(express.json());

app.get("/", (request, response) => {
    console.log(request);
    response.send("Hello world! This is the server!")
})

app.get("/user/new", (req, res) => {
    res.json(new Fake());
})

app.get("/user/:id", (request, response) => {
    console.log(request.params);
    response.send("This is how we grab params out of the url");
})

app.post("/user/new", (req, res) => {
    console.log(req.body);
    res.send("This is how we grab data out of a form post");
})


app.listen(8007, () => {
    console.log("Running on port 8007!");
})