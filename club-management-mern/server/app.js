const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import your routes here
app.use('/api/participants', require('./routes/participantRoutes'));
// app.use('/api/notices', require('./routes/noticeRoutes'));
// app.use('/api/certificates', require('./routes/certificateRoutes'));

module.exports = app;
