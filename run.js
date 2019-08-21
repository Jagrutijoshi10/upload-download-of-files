const express = require('express'),
    app = express();
const cors=require('cors');
app.use(cors())
const bodyParser = require("body-parser");          
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const fs=require('fs')
app.use(express.static('public'));
const path = require('path');
 

//upload a file
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: 'data/uploads'
});
app.post('/api/upload',multipartMiddleware, (req, res) => {
    res.send("welcome to an api")

})
//download a file
var download = require('download-file')
 
var url = "http://i.imgur.com/G9bDaPH.jpg"
var options = {
    directory: "/home/joshi/trial",
    filename: "dfg.odt"
}
 app.post('/download',(req,res)=>{
      download(url, options, function(err){
        if (err) throw err
        console.log("meow")
    }) 
   res.send("download done")
 })

//edit file
app.post('/editfile',(req,res)=>{
    fs.appendFile(__dirname + '/data/uploads/text.html', 're-update a  document', (err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
          });
})


app.listen(8080);
module.exports=app;











// app.use(express.static(path.join(__dirname, "public")));
// app.get('/download', (req, res) => {
// res.download(path.join(__dirname, "/data.ods"));
// });
//
    // res.send(__dirname + '/data/uploads/jiM9m-oNmrNeIan1y-kcXsGe.odt')
// var url2=path.join(__dirname + '/data/uploads/jiM9m-oNmrNeIan1y-kcXsGe.odt')
