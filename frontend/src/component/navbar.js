import React from 'react';

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #eaeaea',
    position: 'sticky',
    top: 0,
    zIndex: 999,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#007bff',
  },
  navLinks: {
    display: 'flex',
    gap: '25px',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
  },
};

function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Left Logo */}
      <div style={styles.logo}>TrustView</div>

      {/* Right Navigation Links */}
      <div style={styles.navLinks}>
        <a href="#hero" style={styles.link}>Home</a>
        <a href="#services" style={styles.link}>Services</a>
        <a href="#projects" style={styles.link}> Projects</a>
        <a href="#projects" style={styles.link}> Testimonials</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
