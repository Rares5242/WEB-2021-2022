//const { createServer } = require('http');
const express = require("express");
const app = express();
const PORT = 3017;
const { readFile } = require('fs');
//const cors = require('cors');
//app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '192.168.37.37:3017');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
/* CORS *
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});
*/
var students = [
    { "nr": 1, "user": "stud1", "nume": "task is completed", "grp": 3 },
    { "nr": 2, "user": "stud2", "nume": "task is pending", "grp": 1 },
    { "nr": 3, "user": "stud3", "nume": "task is ongoing", "grp": 2 },
    { "nr": 4, "user": "stud4", "nume": "task is completed", "grp": 3 },
    { "nr": 5, "user": "stud5", "nume": "tasj is ongoing", "grp": 2 },
    { "nr": 6, "user": "stud6", "nume": "task is pending", "grp": 1 },
    { "nr": 7, "user": "stud7", "nume": "task is completed", "grp": 3 },
    { "nr": 8, "user": "stud8", "nume": "task is pending", "grp": 1 },
    { "nr": 9, "user": "stud9", "nume": "task is ongoing", "grp": 2 }
];
app.get('/', (req, res) => {
    readFile('index.html', function (err, file) {
        if (err) {
            // write an error response or nothing here
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(file, "utf-8");
    });
});
app.get('/getstring', (req, res) => {
    console.log("request recieved");
    res.writeHead(200, { "Content-Type": "application/json" });
    var string = JSON.stringify(students);
    res.end(string);
    //console.log("string sent:" + string);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});