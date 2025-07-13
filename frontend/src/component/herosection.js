import React from 'react';

// Styles for full-page hero with image and text overlay
const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '80vh', // make it take up 80% of the screen height
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // cover entire area
    filter: 'brightness(60%)', // darken image for text visibility
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1.2rem',
  },
};

function HeroSection() {
  return (
    <div style={styles.wrapper}>
      {/* Background image */}
      <img
        src="/images/imageAssest/hero-banner.svg"
        alt="Hero Banner"
        style={styles.image}
      />

      {/* Text over the image */}
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Welcome to TrustView</h1>
        <p style={styles.paragraph}>
          Your trusted partner in impactful NGO projects.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
