const http = require('http');

const s = http.createServer((req, res) => {
    res.end((new Date).toUTCString());
    console.log('Request');
});

s.listen(9090, () => console.log('Server is started'));