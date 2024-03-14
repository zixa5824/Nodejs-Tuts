const fs = require('fs');
const requestHandler = (res,req)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        res.setHeader('Content_Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greetings</title></head>');
        res.write('<body><h1>GREETINGS!</h1></body>');
        res.write('</html>');
        res.end();
    }
    if(url === '/users')
    {
        res.setHeader('Content_Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        res.end();
    }
}
exports = requestHandler;