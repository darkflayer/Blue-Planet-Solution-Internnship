const express = require('express');
const router = express.Router();
const { register, getAll } = require('../controllers/participantController');

router.post('/register', register);
router.get('/', getAll);


module.exports = router;
