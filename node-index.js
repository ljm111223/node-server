var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer( function(req,res){
    var path =  url.parse(req.url,true);
    console.log(path);
    switch (path.pathname){
        case '/favicon.ico':
            break;
        case '/a':
            res.end('aaaaaaaaaaaaa');
            break;
        case '/b':
            res.end('bbbbbbbbbbbbbbb');
            break;
        case '/c':
            res.end('ccccccccccccccc');
            break;
        case '/':
            res.end(fs.readFileSync(__dirname+'/sample/login.html'));
            break;
        default :
            res.end(fs.readFileSync(__dirname+'/sample'+req.url));
    }

} );
server.listen(8080);