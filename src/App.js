import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [content, setContent] = useState('');

  const openBidResults = () => {
    const resultContent = (
      <div>
        <h2>Live Results History</h2>
        <p>Date: 14/02/2024 05:40 PM</p>
        <p>From City: Gurgaon</p>
        <p>To City: Mumbai</p>
        <p>Vehicle Type: Truck, 20 ft</p>
        <p>Material Weight (in Kg): 4000</p>
        <p>Response: 4</p>
        <p>Assigned Staff: Mohith </p>
        <p>Details: view details</p>
      </div>
    );
    setContent(resultContent);
  };

  const openPOD = () => {
    const podContent = (
      <div>
        <h2>POD Details</h2>
        <p>Vehicle loading date: 17/02/2024</p>
        <p>Loading Point: Manesar, Gurugram, Haryana</p>
        <p>Unloading Point: Kotputli, Rajasthan</p>
        <p>Bid No: 16515120650125 (Sunder Yadav)</p>
        <p>Number of Bider for this Bid: 54
          Target Price: Rs 5000
          Assigned Staff: Rahul Pandey
          Phone number: +91 332423442442</p>
          <p>Vehicle loading date: 17/02/2024
            Vehicle Type: 20 ft Truck (Close Body) CNG
            Material: Agricultural Products Weight: 14 Tonnes
            Request Date: 15/02/2024 Expiry Date: 15/02/2024
            Remarks: Urgent Delivery</p>
      </div>
    );
    setContent(podContent);
  };

  const openSettings = () => {
    alert('Open Settings');
  };

  const openProfile = () => {
    alert('Open Profile');
  };

  const contactUs = () => {
    alert('Contact Us');
  };

  const logout = () => {
    alert('Logout');
  };

  return (
    <div>
      <div className="header">
        <img src="logo.png" alt="Company Logo" />
        <div className="user-menu">
          <button onClick={openSettings}>Settings</button>
          <button onClick={openProfile}>Profile</button>
          <button onClick={contactUs}>Contact Us</button>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="sidebar">
        <button onClick={openBidResults}>Bid</button>
        <button onClick={openPOD}>POD</button>
        <button>Vendor</button>
        <button>User</button>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default App;
