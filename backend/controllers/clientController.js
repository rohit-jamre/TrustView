const Client = require('./models/Client');

// Get all clients
const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new client
const createClient = async (req, res) => {
  const { name, position, image } = req.body;

  if (!name || !position || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newClient = new Client({ name, position, image });
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getClients, createClient };
