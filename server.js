// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-Parser')
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

const server = app.listen(port , listening)

function listening (request , response){
    console.log( ` server is running on port : ${port} `);
} 
 

// Processing the GET request
app.get('/data' , SendData)
function SendData (request , response) {
    response.send(projectData);
}

//Processing the POST request
app.post('/add', (request, response) => {
    projectData.date = request.body.date;
    projectData.temperature = request.body.main.temp;
    projectData.feelings = request.body.feelings;
    response.send(projectData);
});
