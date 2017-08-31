var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    descrption: String,
    comments: Array,
    createdAt: { type:Date, default:Date.now },
    views: Number,
    likes: Number,
    Favorites: Number
    // author: {
    //     type: Schema.Types.ObjectId,
    //     ref:'Author'
    // }
})


module.exports = mongoose.model('Post', PostSchema);