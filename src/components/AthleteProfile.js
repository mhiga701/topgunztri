import React from 'react';
import '../App.css';

const AthleteProfile = ({ athlete, isOdd }) => {
  const {
    fullName,
    hometown,
    currentResidence,
    familyDetails,
    occupation,
    startTriathlon,
    preferredDistance,
    highlights,
    interests,
    goals,
    additionalInfo,
    pictureUrl
  } = athlete;

  const imageColumnClass = isOdd ? 'image-left' : 'image-right';
  const hasImage = pictureUrl ? 'with-image' : 'no-image';

  return (
    <div className={`athlete-profile ${imageColumnClass} ${hasImage}`}>
      {pictureUrl && (
        <div className="profile-image">
          <img className='athlete-pic' src={pictureUrl} alt={`${fullName}'s picture`} />
        </div>
      )}
      <div className="profile-details">
        <h2>{fullName}</h2>
        <p><strong>Hometown:</strong> {hometown}</p>
        <p><strong>Current Residence:</strong> {currentResidence}</p>
        <p><strong>Family Details:</strong> {familyDetails}</p>
        <p><strong>Occupation:</strong> {occupation}</p>
        <p><strong>Started Triathlon:</strong> {startTriathlon}</p>
        <p><strong>Preferred Race Distance:</strong> {preferredDistance}</p>
        <p><strong>Career Highlights:</strong> {highlights}</p>
        <p><strong>Interests and Hobbies:</strong> {interests}</p>
        <p><strong>2024 Goals with Top Gunz:</strong> {goals}</p>
        {additionalInfo && <p><strong>Additional Info:</strong> {additionalInfo}</p>}
      </div>
    </div>
  );
};

export default AthleteProfile;
