console.log("Hello World");

const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');

console.log("Kuchh to hua hai");

// mongoose.connect('mongodb://localhost/farewellData');
// let db = mongoose.connection;

// //check db connection
// db.once('open', function(){
//   console.log("MongoDB connect ho gaya");
// });
//
// //check for db errors
// db.on('error',function(err) {
//   console.log("Error aa gaya db main");
//   console.log(err);
// });

console.log("Kuchh ho gaya hai");
//init app
const Express = require('express');
const app = new Express();
app.use(Express.static(__dirname+'/public'));

//bring in models
let Article = require('./models/article')
//load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//home Route
app.get('/invitation', function(req, res){

  console.log(Article)

  Article.find({}, function(err, response){
    if(err){
      console.log(err);
    }
    else{
      res.render('invitation',{
        title:"You are invited",
        articles: response
      });
    }
  });

});

app.get('/', function(req, res){

  //
  // res.render('index',{
  //   title:"IIMK Farewell 2020"
  // });

  res.sendFile(__dirname+'/main.html');
  // res.sendFile(__dirname+'/broadwayLogo.png');
});

//start server
app.listen(process.env.PORT || 3000, function(){
  console.log("server started at port 3000");
});
