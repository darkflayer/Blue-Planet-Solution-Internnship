const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    eventId: String,
    team: String,
    college: String,
}, { timestamps: true });

module.exports = mongoose.model('Participant', participantSchema);
