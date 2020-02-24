let mongoose = require('mongoose');

//article schema
let articleSchema = mongoose.Schema({
  rollNo:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required:true
  }
});

let Article = module.export = mongoose.model('Article', articleSchema);
