const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const FilemdController = require(path.join(__dirname, 'controllers', 'filemd.controller'));

const app = express();

// Initialize middleware
app.use(cors());

// Connect the backend code with the database
mongoose.connect(process.env.DB_URI, {
	useNewUrlParser: true, useCreateIndex: true 
});
const db = mongoose.connection;
db.on('error', err => { console.error('Connection error: ', err); db.close(); });
db.once('open', () => console.log('Connected to the database'));

// Default route
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));

// Metadata route
app.post('/api/filemetadata', FilemdController.addFile);

// Error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		status: err.status || 500,
		message: err.message
	});
});

// Init server
app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));