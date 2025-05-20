const Participant = require('../models/Participant');

exports.register = async (req, res) => {
    try {
        const participant = new Participant(req.body);
        await participant.save();
        res.status(201).json(participant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const participants = await Participant.find();
        res.json(participants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
