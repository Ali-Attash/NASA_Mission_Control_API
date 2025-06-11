// planet.service.js
const { parse } = require('csv-parse');
const fs = require('fs');
const path = require('path');
const Planet = require('../models/habitable.planets');

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

async function loadPlanetsData() {
  const existingCount = await Planet.countDocuments();

  if (existingCount > 0) {
    console.log(`ℹ️ ${existingCount} planets already exist. Skipping CSV parsing.`);
    return;
  }

  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, './12.1 kepler_data.csv'))
      .pipe(parse({
        comment: '#',
        columns: true,
      }))
      .on('data', async (planet) => {
        if (isHabitablePlanet(planet)) {
          try {
            await Planet.updateOne(
              { keplerName: planet.kepler_name },
              { keplerName: planet.kepler_name },
              { upsert: true }
            );
          } catch (err) {
            console.error(`❌ Error saving planet ${planet.kepler_name}`, err);
          }
        }
      })
      .on('error', (err) => {
        reject(err);
      })
      .on('end', async () => {
        const count = await Planet.countDocuments();
        console.log(`✅ ${count} habitable planets loaded.`);
        resolve();
      });
  });
}

module.exports = {
  loadPlanetsData,
};
