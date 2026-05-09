import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '2rem 0', 
      textAlign: 'center', 
      borderTop: '1px solid rgba(212, 165, 116, 0.15)',
      backgroundColor: 'var(--color-bg-secondary)'
    }}>
      <div className="container">
        <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
          &copy; {new Date().getFullYear()} Heet Rupapara. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
