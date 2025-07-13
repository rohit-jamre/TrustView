const Contact = require('../models/Contact');

const submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    const saved = await newContact.save();
    res.status(201).json({ message: 'Contact message sent successfully', data: saved });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { submitContact };
