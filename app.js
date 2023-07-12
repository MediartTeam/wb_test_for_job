const http = require('http')
const fetchWB = require('./fetcher')

const PORT = 3000;


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')

    fetchWB().then(result => {
            res.end(JSON.stringify(result));
    });
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Listen port ${PORT}`)
})