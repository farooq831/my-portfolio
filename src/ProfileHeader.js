// src/ProfileHeader.js
import React from 'react';
import avatar from './assets/profile.jpg'; // Use your picture

const ProfileHeader = () => (
  <div style={styles.headerBox}>
    <img src={avatar} alt="Profile" style={styles.avatar} />
    <h2 style={styles.name}>Muhammad Farooq</h2>
    <h4 style={styles.role}>Information Technology Student @ IIUI | Tech Enthusiast</h4>
  </div>
);

const styles = {
  headerBox: {
    background: '#181f27',
    borderRadius: '20px',
    padding: '32px',
    textAlign: 'center',
    marginBottom: '32px',
    marginTop: '48px',
    width: '350px',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '12px',
    objectFit: 'cover'
  },
  name: {
    fontWeight: 'bold',
    margin: '10px 0 5px 0'
  },
  role: {
    fontWeight: 'normal',
    margin: 0,
    fontSize: '1rem'
  
  }
};

export default ProfileHeader;
