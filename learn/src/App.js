// var greetings = require('greetings');
// var hola = require('hola');

// greetings.hello();
// hola('John doe');

// require('greetings').bye('Jane');


// // Example of using clearInterval
// const intervalId = setInterval(function() {
//   console.log('Tick');
// }, 1000);
// setTimeout(function() {
//   clearInterval(intervalId); // Stop the interval after 5 seconds
// }, 5000);

const fs = require('fs')
fs.rename('before.json', 'after.json', err => {
  if(err) {
    return console.error(err)
  }
})

const fs= require('fs')

try{
  fs.renameSync('before.json','after.json')
}catch(err) {
  console.error(err)
}

const http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Node.js says hello!');
  res.end();
}).listen(3000);


