const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(req, res){
    console.log(req);
    var _url = req.url;
    console.log(_url);
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);

    if(_url == '/')
        _url = '/index.html';
    
    if(_url == '/favicon.ico')
        return res.writeHead('404');
    
   
    if (queryData.id == '1'){
        res.writeHead(302, {
            'Location':'https://www.opentutorials.org'
        });
         res.end();
    } else if (queryData.id = '2'){
        res.writeHead(301, {
            'Location':'talktomeinkorean.com'
        });
        res.end();
    }
    res.writeHead('200');
    res.end(queryData.id);

});

server.listen(3000, 'localhost', () => {
    console.log(`Server running at `);
});