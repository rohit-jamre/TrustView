// src/components/Navbar.js

import React from 'react';

// Styling for Navbar component
const styles = {
  nav: {
    padding: '15px 30px',
    backgroundColor: '#222324ff',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  }
};

// Navbar Component
// Displays the top navigation bar with branding
function Navbar() {
  return (
    <nav id="navbar" style={styles.nav} className="navbar">
      {/* Brand title or logo */}
      <div style={styles.logo} className="navbar-logo">TrustView</div>
      
    </nav>
  );
}

export default Navbar;
