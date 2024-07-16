import React from 'react';
import '../App.css';

const SponsorProfile = ({ sponsor, isEven }) => {
  const {
    sponsorName,
    pictureUrl
  } = sponsor;

  const imageColumnClass = isEven ? 'image-left' : 'image-right';
  const hasPic = pictureUrl ? 'with-image' : 'no-image';

  return (
    <div className={`sponsor-profile ${imageColumnClass} ${hasPic}`}>
      {pictureUrl && (
        <div className="profile-image">
          <img className='sponsor-pic' src={pictureUrl} alt={`${sponsorName}'s picture`} />
        </div>
      )}
      <div className="sponsor-profile-details">
        <h2>{sponsorName}</h2>
        
      </div>
    </div>
  );
};

export default SponsorProfile;