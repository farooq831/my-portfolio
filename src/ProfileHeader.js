// src/ProfileHeader.js
import React from "react";
import "./ProfileHeader.css"; // Create this file for custom styles

const ProfileHeader = () => (
  <div className="profile-header">
    <img
      src={require("./assets/profile.jpg")}
      alt="Profile"
      className="profile-avatar"
    />
    <div className="profile-info">
      <h1>Your Name</h1>
      <p>Your Profession or Tagline</p>
    </div>
  </div>
);

export default ProfileHeader;
