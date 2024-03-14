const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        res.setHeader('Content_Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greetings</title></head>');
        res.write('<body><h1>GREETINGS!</h1>');
        res.write('<h2><form action="/create-users" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></h2></body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/users')
    {
        res.setHeader('Content_Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-users' && method === 'POST')
    {
        const body = [];
        req.on('data', (stream)=>body.push(stream));
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302; // REDIRECTED !!
            res.setHeader('Location','/');
            return res.end();
        });

    }
}
module.exports = requestHandler;