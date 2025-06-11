const mongoose = require('mongoose');

async function connectionToDb() {
  try {
    await mongoose.connect('mongodb+srv://aliattash1234:kabulMongodb123321@nasadb1.bjo9boy.mongodb.net/?retryWrites=true&w=majority&appName=NasaDB1');
    console.log('✅ Connection to Database Established Successfully');
  } catch (err) {
    console.log('❌ Connection to Database Failed');
    console.error(err.message);
  }
}

module.exports = connectionToDb;
