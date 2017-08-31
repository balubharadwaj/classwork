var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    name: String,
    email:{
        type: String
    }
})


module.exports = mongoose.model('Author', AuthorSchema);