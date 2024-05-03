const mongoose = require('mongoose')

const dbConnect = async() =>{

  try {
    await mongoose.connect( process.env.MONGODB_CNN );
    console.info('Successful connection to the database');
  } catch (error) {
    console.error( error );
    throw new Error('Error connecting to database');
  }

}

module.exports = {
  dbConnect
};