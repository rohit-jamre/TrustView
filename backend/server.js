const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const projectRoutes = require('./routes/projectRoutes');
const clientRoutes = require('./routes/clientRoutes');

app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes); 
const newsletterRoutes = require('./routes/newsletterRoutes');
app.use('/api/newsletter', newsletterRoutes);
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);



app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
