import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className="text-and-buttons">
        <h1>Topgunz Triathlon Team</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            LEARN MORE
          </Button>
        </div>
      </div>
      <img className='team-pic' src='/images/homebanner.jpg' alt='Topgunz Triathlon Team' />
    </div>
  );
}

export default HeroSection;
