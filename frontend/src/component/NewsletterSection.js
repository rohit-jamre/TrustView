import React, { useState } from 'react';
import axios from 'axios';

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#222',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '12px 16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  message: {
    marginTop: '20px',
    fontSize: '0.95rem',
  },
};

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return setMessage('⚠️ Please enter an email address.');
    }

    try {
      const res = await axios.post('http://localhost:5000/api/newsletter', { email });
      if (res.status === 201) {
        setMessage('✅ Thank you for subscribing!');
        setEmail('');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage('⚠️ This email is already subscribed.');
      } else {
        setMessage('❌ Failed to subscribe. Try again.');
      }
    }
  };

  return (
    <section id="newsletter" style={styles.section}>
      <h2 style={styles.heading}>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" style={styles.button}>
          Subscribe
        </button>
      </form>
      {message && <div style={styles.message}>{message}</div>}
    </section>
  );
}

export default NewsletterSection;
