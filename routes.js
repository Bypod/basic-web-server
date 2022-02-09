//Create event emitter class
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
//initializinng the new emitter
const myEmitter = new MyEmitter();
//calling file system module
const fs = require('fs')

myEmitter.on('load', (route, sCode) => {
    console.log('The status code of ' + route + ' is: ' + sCode)
})

myEmitter.on('read', (file) => {
    console.log(file + ' was read successfully')
})

function indexPage(path, res){
    myEmitter.emit('load', 'index', res.statusCode)
    fileGrab(path, res)
}

function f1Page(path, res){
    myEmitter.emit('load', 'f1', res.statusCode)
    fileGrab(path, res)
}

function musicPage(path, res){
    myEmitter.emit('load', 'music', res.statusCode)
    fileGrab(path, res)
}

function errorPage(path, res){
    myEmitter.emit('load', 'error', res.statusCode)
    fileGrab(path, res)
}

function snowboardPage(path, res){
    myEmitter.emit('load', 'board', res.statusCode)
    fileGrab(path, res)
}

function blankPage(path, res){
    myEmitter.emit('load', 'blank', res.statusCode)
    fileGrab(path, res)
}

function secretPage(path, res){
    myEmitter.emit('load', 'secret', res.statusCode)
    fileGrab(path, res)
}

function fileGrab(path, res) {
    fs.readFile(path, function(e, data) {
        if(e) {
            console.log(e);
            res.end();
        } else {
            myEmitter.emit('read', path)
            res.writeHead(res.statusCode, {'Content-Type': 'text/html'})
            res.write(data);
        }
    })
}

module.exports = {
    indexPage,
    f1Page,
    musicPage,
    errorPage,
    snowboardPage,
    blankPage,
    secretPage
}
