const express = require('express');
const router = express.Router();
const { createNotice, getAllNotices, deleteNotice } = require('../controllers/noticeController');

router.post('/', createNotice);
router.get('/', getAllNotices);
router.delete('/:id', deleteNotice);

module.exports = router;
