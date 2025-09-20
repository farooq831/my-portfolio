// src/App.js
import React from 'react';
import ProfileHeader from './ProfileHeader';
import SocialLinks from './SocialLinks';
import QrCodeMobile from './QrCodeMobile';

function App() {
  return (
    <div style={styles.container}>
      <SocialLinks />
      <QrCodeMobile />


    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#141c23',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#fff',
  }
};

export default App;
