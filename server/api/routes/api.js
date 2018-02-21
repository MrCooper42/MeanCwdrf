'use strict';

const express = require('express');
const router = express.Router();

const ctrlProfile = require('../controllers/profile.js');

router.get('/', (req, res) => res.send('API Works'));
router.get('/profile', auth, ctrlProfile.profileRead);

module.exports = router;
