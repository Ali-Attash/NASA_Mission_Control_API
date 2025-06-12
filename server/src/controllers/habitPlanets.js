const Planet = require('../models/habitable.planets');


async function getAllPlanets(req, res) {
  try {
    const planets = await Planet.find({}, { _id: 0, __v: 0 });
    const result = planets.map(p => ({
      kepler_name: p.keplerName
    }));
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch planets' });
  }
}

module.exports = {
  getAllPlanets
}

