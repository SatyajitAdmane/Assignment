const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/machine_status';

const app = express();
app.use(cors());
app.use(express.json())


// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Define the data model (replace with your schema)
const MachineDataSchema = new mongoose.Schema({
  ts: { type: String, required: true },
  machine_status: { type: Number, required: true },
  vibration: { type: Number, required: true },
});

const MachineData = mongoose.model('MachineData', MachineDataSchema);

// Middleware
app.use(bodyParser.json());

// GET all data
app.get('/api/data', async (req, res) => {
  try {
    const data = await MachineData.find();
    res.json(data);
    console.log(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});



const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server started on port ${port}`));