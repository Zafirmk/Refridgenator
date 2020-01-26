const express = require('express');
const path = require('path');
const request = require('request');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload());
app.use(express.json()); 


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/index.html'))
});


  app.post('/upload', function(req, res) {
    if(!req.files) {
      var ret = {error: "No Files Sent"};
      res.send(ret);
    }
  
    let uploadFile = req.files.someUpload;
  
    uploadFile.name = 'imageToSave.png'
    // Use the mv() method to place the file somewhere on your server
    uploadFile.mv('uploads/' + uploadFile.name, function(err) {
      if(err) {
          res.send("error");
        return;
      }
      var ret = {error:"Success on Upload of file " + uploadFile.name};
      res.send(ret);
    });

        //Make a call to the server her
  });
  

  app.listen(35600, () => {
    console.log("Node running");
  })

