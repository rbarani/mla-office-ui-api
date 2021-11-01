const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Content-Type", "text/html");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
});

// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
    res.send("Hello Worlds");
});



// Require employee routes
const employeeRoutes = require('./routes/authentication.routes')
// using as middleware
app.use('/api/v1/users', employeeRoutes)// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});