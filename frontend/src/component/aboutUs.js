import React from 'react';

// Center-aligned "About Us" section with text on top, image below
const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#fdfdfd',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#222',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#444',
    maxWidth: '800px',
    margin: '0 auto 40px auto',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
  },
};

function AboutUs() {
  return (
    <section id="about-us" style={styles.section}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.paragraph}>
        TrustView is more than a platform — it's a mission-driven initiative connecting compassionate donors
        with verified NGOs. Our goal is to empower communities by ensuring transparency, accountability,
        and real change. Every project we showcase is tracked, measured, and reported so that your support
        creates maximum impact.
      </p>

      <img
        src="/images/about-us.jpg"  
        alt="About TrustView"
        style={styles.image}
      />
    </section>
  );
}

export default AboutUs;
