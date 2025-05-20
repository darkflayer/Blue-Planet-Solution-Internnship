const Notice = require('../models/Notice');

// Create a notice
exports.createNotice = async (req, res) => {
    try {
        const notice = new Notice(req.body);
        await notice.save();
        res.status(201).json(notice);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all notices
exports.getAllNotices = async (req, res) => {
    try {
        const notices = await Notice.find().sort({ createdAt: -1 });
        res.json(notices);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a notice
exports.deleteNotice = async (req, res) => {
    try {
        const { id } = req.params;
        await Notice.findByIdAndDelete(id);
        res.json({ message: 'Notice deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
