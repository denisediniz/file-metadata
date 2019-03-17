const sanitize = require('mongo-sanitize');
const multer = require('multer');
const path = require('path');
const FilemdModel = require(path.join(__dirname, '..', 'models', 'filemd.model'));

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname))
	}
})

const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (path.extname(file.originalname) !== '.jpg') return cb(new Error('Only jpg files allowed!'));
		cb(null, true);
	}
}).single('upfile');

exports.addFile = function (req, res, next) {
	upload(req, res, function (err) {
		if (err) return next(err);

		const newFile = new FilemdModel({
			name: sanitize(req.file.originalname),
			size: req.file.size
		});

		newFile.save((err, data) => {
			if (err) return next(err);
			res.json({ name: data.name, size: data.size });
		});

	})




}