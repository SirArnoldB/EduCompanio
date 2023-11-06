
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{margin: '0 auto', padding: '15px', textAlign: 'center', backgroundColor: '#000000'}}>
      <p>Created by Arnold Bhebhe and John Adeyemo</p>
      <p>&copy; {currentYear} All rights reserved.</p>
    </footer>
  );
}

export default Footer;
