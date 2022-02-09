const http = require('http')
const routesFile = require('./routes')
const url = require('url')

const server = http.createServer(function(req, res) {
    let route = url.parse(req.url).pathname;
    let path = './views'
    
    switch(route) {
        case '/':
            path += '/index.html'
            console.log('welcome one and all to the main page')
            routesFile.indexPage(path, res)
            break
        case '/formula1':
            path += '/f1.html'
            console.log('Vroom vroom f1 cars go fast')
            routesFile.f1Page(path, res)
            break;
        case '/snow':
            path += '/board.html'
            console.log('Just some shreeddin')
            routesFile.snowboardPage(path, res)
            break;
        case '/music':
            path += '/music.html'
            console.log('da ba dee da ba die')
            routesFile.musicPage(path, res)
            break;
        case '/secret':
            res.statusCode = 403
            path += '/secret.html'
            console.log('top secret. ACCESS: DENIED.')
            routesFile.secretPage(path, res)
            break;
        case '/blank':
            res.statusCode = 204
            path += '/blank.html'
            console.log('this page is empty')
            routesFile.blankPage(path, res)
            break;
        default:
            res.statusCode = 404;
            path += '/error.html'
            console.log('This is not thee page you are looking for!....')
            routesFile.errorPage(path, res)
            break;
    }
})

server.listen(3000, function(e){
    if (e){
        console.log('Uh Oh! Something went wrong!')
    } else {
        console.log('Server is up and running!')
    }
})