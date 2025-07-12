const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const projectRoutes = require('./routes/projectRoutes');
app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
