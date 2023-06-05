const mongoose = require("mongoose");

const conectarDB = async () => {
  try {
    const db = await mongoose.connect(
      process.env.MONGO_URI,
      {
        usenewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const url = `${db.connection.host}: ${db.connection.port}`;
    console.log(`MongoDB conectado en: ${url}`);
    console.log("conectado correctamente")
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit();
  }
};
module.exports = conectarDB