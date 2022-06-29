const mongoose = require('mongoose');

mongoose.connect('		'mongodb+srv://bharath:Livethegame14@firstclustertest.jgypz.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;
mongoose.set("useFindAndModify", false);// part 2 point 9
const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordatas',AuthorSchema);
module.exports = authordata;
