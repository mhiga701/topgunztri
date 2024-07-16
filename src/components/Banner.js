import React from 'react';
import './Banner.css'; // Import the CSS file for styling

const Banner = () => {
  return (
    <div className="banner">
      <img src="/images/homebanner.jpg" alt="Banner Image" className="banner-image" />
      <div className="banner-heading">
        <h1>About Topgunz</h1>
      </div>
    </div>
  );
};

export default Banner;