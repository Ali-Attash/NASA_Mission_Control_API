# 🚀 NASA Mission Control API

A Node.js backend built with Express that processes NASA's Kepler exoplanet data to identify potentially habitable planets, stores them in MongoDB, and serves them through a RESTful API.

This project simulates a mission control system for managing and accessing scientifically interesting exoplanet candidates, inspired by real NASA Kepler data.

---

## 🌟 Features

- ✅ Parses real CSV data from the Kepler space telescope
- ✅ Filters planets that meet specific habitability criteria:
  - Disposition must be `CONFIRMED`
  - Insolation between `0.36` and `1.11`
  - Radius less than `1.6` Earth radii
- ✅ Saves filtered data to MongoDB Atlas
- ✅ Serves habitable planets as a JSON API at `/api/planets`
- ✅ Skips reprocessing data if it’s already loaded

---

## 🧠 Project Structure

## Project Structure

```
server/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── habitPlanets.js
│   ├── data/
│   │   ├── 12.1 kepler_data.csv
│   │   └── planet.service.js
│   ├── database/
│   │   └── mongodb.js
│   ├── models/
│   │   └── habitable.planets.js
│   ├── routes/
│   │   └── foundPlanets.js
│   ├── app.js
│   └── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/NASA_MISSION-CONTROL_API.git
   cd NASA_MISSION-CONTROL_API

   🛠️ Tech Stack
Node.js – Server-side runtime

Express – REST API framework

MongoDB Atlas – Cloud database

Mongoose – ODM for MongoDB

csv-parse – CSV parsing utility

