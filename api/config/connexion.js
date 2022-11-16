const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@cluster0.z2vqjrg.mongodb.net/${process.env.MONGO_NAME}?retryWrites=true&w=majority`
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
