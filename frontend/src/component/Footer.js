import React from 'react';

const styles = {
  wrapper: {
    backgroundImage: 'url("/images/imageAssest/Rectangle.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  topFooter: {
    backgroundColor: '#007bff',
    padding: '20px',
    color: '#fff',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
  },
  navLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    fontSize: '1rem',
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    padding: '8px 12px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '1rem',
    minWidth: '220px',
  },
  subscribeButton: {
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#fff',
    color: '#007bff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  bottomFooter: {
    backgroundColor: '#1c1c1c',
    color: '#ccc',
    padding: '20px',
    textAlign: 'center',
  },
  bottomRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '10px',
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    color: '#fff',
    fontSize: '1.1rem',
    textDecoration: 'none',
  },
};

function Footer() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}>
        {/* Blue middle section */}
        <div style={styles.topFooter}>
          <div style={styles.navLinks}>
            <a href="#hero" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
            <a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
            <a href="#testimonials" style={{ color: 'white', textDecoration: 'none' }}>Testimonials</a>
            <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          </div>

          <div style={styles.inputGroup}>
            <input type="email" placeholder="Enter your email" style={styles.input} />
            <button style={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>

        {/* Bottom footer */}
        <div style={styles.bottomFooter}>
          <div>© All Rights Reserved 2025</div>
          <div style={styles.bottomRow}>
            <div style={styles.logo}>Trust <span style={{ color: '#007bff' }}>View</span></div>
            <div style={styles.socialIcons}>
              <a href="#" style={styles.icon}>🐦</a>
              <a href="#" style={styles.icon}>📘</a>
              <a href="#" style={styles.icon}>💼</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
