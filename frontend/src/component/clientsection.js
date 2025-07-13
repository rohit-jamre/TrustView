import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Styles to match the existing layout
const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#222',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    width: '260px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    textAlign: 'center',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  name: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '5px',
  },
  position: {
    fontSize: '0.95rem',
    color: '#777',
  },
};

function ClientsSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/clients')
      .then((res) => setClients(res.data))
      .catch((err) => console.error('Error fetching clients:', err));
  }, []);

  return (
    <section id="clients" style={styles.section}>
      <h2 style={styles.heading}>Our Clients</h2>
      <div style={styles.container}>
        <div style={styles.grid}>
          {clients.map((client) => (
            <div key={client._id} style={styles.card}>
              <img
                src={client.image}
                alt={client.name}
                style={styles.image}
              />
              <h3 style={styles.name}>{client.name}</h3>
              <p style={styles.position}>{client.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
