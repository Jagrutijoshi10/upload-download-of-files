const express=require('express'),
      app=express();
// app.listen(3000);      
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Return the url part of the request object:
  res.write(req.url);
  res.end();
}).listen(8080);


// function one(x){
//     console.log(x);
// }
// function two(var1,callback){
//    callback(var1)
//  }
// two(2,one)

// setTimeout(add,1000)
// setTimeout(result,2000)

// function params(a,b){
//    console.log("the result is",a+b)
// }
// function add(callback){
//    console.log("dfghjk")
// }
// add(params(2,3))

//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve("done"),1000)
//     })


// promise.then(result => console.log(result))
//         .then(result=>console.log("second time done"))
//         .then(result=>console.log("third time done"));



// module.exports=app;