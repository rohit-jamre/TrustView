import React from 'react';

// Complete "Why Choose Us" section with side images around banner
const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '40px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    marginBottom: '60px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '30px 20px',
    maxWidth: '280px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s ease',
  },
  icon: {
    width: '60px',
    height: '60px',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: '1.5',
  },

  // Banner + Side Image Styles
  imageRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginTop: '40px',
  },
  leftImage: {
    width: '100px',
    height: '100px',
    borderRadius: '12px',
    objectFit: 'cover',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  bannerImage: {
    width: '80%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  rightImage: {
    width: '80px',
    height: '80px',
    borderRadius: '12px',
    objectFit: 'cover',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
};

function WhyChooseUs() {
  return (
    <section style={styles.section}>
      {/* Section Heading */}
      <h2 style={styles.heading}>Why Choose TrustView?</h2>
      <p style={styles.subheading}>
        We bring trust, transparency, and tangible results to every project.
      </p>

      {/* Feature Cards */}
      <div style={styles.grid}>
        <div style={styles.card}>
          <img src="/images/icon-transparency.svg" alt="Transparency" style={styles.icon} />
          <h3 style={styles.cardTitle}>100% Transparency</h3>
          <p style={styles.cardText}>
            Every project is documented and traceable. You know exactly where your efforts go.
          </p>
        </div>

        <div style={styles.card}>
          <img src="/images/icon-impact.svg" alt="Impact" style={styles.icon} />
          <h3 style={styles.cardTitle}>Real Impact</h3>
          <p style={styles.cardText}>
            We work with vetted NGOs and ensure each initiative creates measurable change.
          </p>
        </div>

        <div style={styles.card}>
          <img src="/images/icon-support.svg" alt="Support" style={styles.icon} />
          <h3 style={styles.cardTitle}>Ongoing Support</h3>
          <p style={styles.cardText}>
            Our team stays with you throughout the journey to maximize success and impact.
          </p>
        </div>
      </div>

      {/* Banner with Left and Right Side Images */}
      <div style={styles.imageRow}>
        <img
          src="/images/imageAssest/pexels-brett-sayles-2881232.svg"
          alt="Left Visual"
          style={styles.leftImage}
        />
        <img
          src="/images/imageAssest/pexels-andres-ayrton-6578391.svg"
          alt="Main Banner"
          style={styles.bannerImage}
        />
        <img
          src="/images/imageAssest/pexels-fauxels-3182834.svg"
          alt="Right Visual"
          style={styles.rightImage}
        />
      </div>
    </section>
  );
}

export default WhyChooseUs;
