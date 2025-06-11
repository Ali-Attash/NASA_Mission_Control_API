const express = require('express');
const { getAllPlanets } = require('../controllers/habitPlanets');

const router = express.Router();

router.get('/', getAllPlanets); // <-- change here

module.exports = router;