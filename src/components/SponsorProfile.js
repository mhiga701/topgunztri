import React from 'react';
import '../App.css';

const SponsorProfile = ({ sponsor, isEven }) => {
  const {
    sponsorName,
    pictureUrl,
    webUrl
  } = sponsor;

  const imageColumnClass = isEven ? 'image-left' : 'image-right';
  const hasPic = pictureUrl ? 'with-image' : 'no-image';

  return (
    <div className={`sponsor-profiles ${imageColumnClass}`}>
      {pictureUrl && (
        <div className="profile-image">
          <a href={webUrl} target="_blank" rel="noreferrer">
          <img className='sponsor-pic' src={pictureUrl} alt={`${sponsorName}'s picture`} />
          </a>
        </div>
      )}
     
    </div>
  );
};

export default SponsorProfile;