const mongoose = require('mongoose');
mongoose
	.connect(
		'mongodb+srv://bharath:Livethegame14@firstclustertest.jgypz.mongodb.net/test?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true, //*9deprcated error fix for update operations
			useFindAndModify: false
		}
	)
	.then((x) => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
	})
	.catch((err) => {
		console.error('Error connecting to mongo', err);
	});
//mongoose.connect('mongodb://localhost:27017/Library',{useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;
//mongoose.set("useFindAndModify", false);// part 2 point 9

const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdatas',BookSchema);

module.exports = bookdata;
