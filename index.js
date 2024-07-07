const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model('Kitten', kittySchema);

async function createKitten() {
  const silence = new Kitten({ name: 'Silence' });
  try {
    await silence.save();
    console.log('Kitten saved to database');
  } catch (err) {
    console.error(err);
  }
}

createKitten();
