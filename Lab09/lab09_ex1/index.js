const { createServer } = require('http');
const { readFile } = require('fs');
const { parse } = require('url');
var choices = ["No pressure, no diamonds",
    "Be yourself, everyone else is already taken",
    "So many books, so little time",
    "Aspire to inspire before we expire",
    "Stay foolish to stay sane",
    "When nothing goes right, go left",
    "Try Again. Fail again. Fail better",
    "Don’t tell people your plans. Show them your results"
];
createServer(function (request, response) {
    var path = parse(request.url).pathname;
    if (path == "/getstring") {
        console.log("request recieved");
        response.writeHead(200, { "Content-Type": "application/json" });
        let arrJsonChoices = choices.map(function (element) {
            return { "quote": `${element}` };
        })
        var string = JSON.stringify(arrJsonChoices);
        response.end(string);
        console.log("string sent:" + string);
    } else {
        readFile('index.html', function (err, file) {
            if (err) {
                // write an error response or nothing here
                return;
            }
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(file, "utf-8");
        });
    }
}).listen(3017);
console.log("server initialized");