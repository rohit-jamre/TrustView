import React from 'react';


const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#222',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555',
    maxWidth: '800px',
    margin: '0 auto 60px auto',
  },
  imageGroup: {
    position: 'relative',
    width: '360px',
    height: '400px',
    margin: '0 auto', // centers the image group
  },
  img1: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    objectFit: 'cover',
    position: 'absolute',
    top: '40px',
    left: '0',
    zIndex: 3,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  img2: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    objectFit: 'cover',
    position: 'absolute',
    top: '-20px',
    left: '180px',
    zIndex: 2,
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15)',
  },
  img3: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    position: 'absolute',
    top: '200px',
    left: '160px',
    zIndex: 1,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
};

function RetailerSection() {
  return (
    <section id="retailer" style={styles.section}>
      {/* Section Heading */}
      <h2 style={styles.heading}>Not your average retailer</h2>
      <p style={styles.paragraph}>
        We focus on creating real impact, not just transactions. With transparency at its core,
        TrustView ensures that every project makes a difference. Real people, real stories, and real transformation.
      </p>

      {/* Layered Circular Images */}
      <div style={styles.imageGroup}>
        <img src="/images/imageAssest/Ellipse 11.svg" alt="Main Impact" style={styles.img1} />
        <img src="/images/imageAssest/Ellipse 12.svg" alt="Top Right" style={styles.img2} />
        <img src="/images/imageAssest/Ellipse 13.svg" alt="Bottom Right" style={styles.img3} />
      </div>
    </section>
  );
}

export default RetailerSection;
