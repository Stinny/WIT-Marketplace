const mongoose = require('mongoose');
require('dotenv/config');

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to DB...');
  } catch (err) {
    console.log('MongoDB connection failed...');

    //process ends with failure, server shuts down
    process.exit(1);
  }
};

module.exports = connectToDB;
