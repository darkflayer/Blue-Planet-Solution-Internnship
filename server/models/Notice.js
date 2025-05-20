const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    postedBy: { type: String }, // Can be user ID or just name
    visibility: { type: String, enum: ['Public', 'ClubMembers', 'Coordinators'], default: 'Public' }
}, { timestamps: true });

module.exports = mongoose.model('Notice', noticeSchema);
