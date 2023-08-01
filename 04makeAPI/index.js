const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'application\json'
    });
    response.write(JSON.stringify(
        [
            {
                name: 'Yash Baheti',
                email: 'yashbaheti2002@gmail.com'
            },
            {
                name: 'Shera',
                email: 'shera2903@gmail.com'
            },
            {
                name: 'Raj Baheti',
                email: 'rajbaheti2005@gmail.com'
            }
        ]
    ));
    response.end();
}).listen(5000);