import React from 'react';
import qrImage from './assets/qr-code.svg';


const QrCodeMobile = () => (
  <div style={styles.container}>
    <div style={styles.text}>View on mobile</div>
    <img src={qrImage} alt="QR code for mobile view" style={styles.qr} />
  </div>
);

const styles = {
  container: {
    position: 'fixed',
    right: '40px',
    bottom: '30px',
    textAlign: 'center',
    zIndex: 9999,
    background: 'transparent'
     
  },
 

  text: {
    fontSize: '1.1rem',
    color: '#e5eaff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    marginBottom: '6px'
  },
  qr: {
    width: '130px',
    height: '130px'
  }
};

export default QrCodeMobile;
