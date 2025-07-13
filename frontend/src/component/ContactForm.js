import React, { useState } from 'react';
import axios from 'axios';

const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  message: {
    marginTop: '15px',
    fontSize: '0.95rem',
    color: '#333',
  },
};

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      if (res.status === 201) {
        setStatus(' Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatus(' Failed to send. Please try again.');
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          style={styles.input}
          required
        ></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
        {status && <p style={styles.message}>{status}</p>}
      </form>
    </section>
  );
}

export default ContactForm;
