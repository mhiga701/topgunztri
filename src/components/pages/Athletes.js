import React from 'react';
import '../../App.css';
// import AthleteProfile from '../AthleteProfile';
import AthleteProfiles from '../AthleteProfiles';
import Footer from '../Footer';

export default function Athletes() {
  return (
    <>
      <h1 className='athleteh1'>Athletes</h1>
      <AthleteProfiles />
      <Footer />
    </>
 
  );
}
