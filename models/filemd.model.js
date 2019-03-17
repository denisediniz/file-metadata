const mongoose = require('mongoose');

const FilemdSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	size: {
		type: Number
	}
});

module.exports = mongoose.model('Filemd', FilemdSchema);