import React from 'react';
import './Content.css'; // Import the CSS file for styling
import { Button } from './Button';

const MainContent = () => {
  return (
    <div className="main-content">
      <div class="content-wrapper">
    <div class="text-column">
      <h3>What's the Top Gunz Tri Team all about?</h3>
      <p class='about-par'>
        Where passion meets performance, and every stride is a step towards greatness. Established in 2024 with a vision to redefine the boundaries of endurance sports, Top Gunz Tri Team is not just a team; it's a community of like-minded individuals united by the thrill of the triathlon while still thriving as great parents, spouses, working professionals, and human beings.
      </p>
      <p class='about-par'>
        Our journey began with a simple yet profound belief: that every athlete, from novice to elite, deserves a supportive and inspiring environment to push their limits and achieve their personal best. Top Gunz Tri Team is more than just a collection of athletes; it's a family that shares a commitment to excellence, sportsmanship, and the relentless pursuit of success across all aspects of life.
      </p>
      <p class='about-par'>
        What sets Top Gunz apart is our emphasis on camaraderie and a supportive community. We believe that shared victories taste sweeter, and every setback is an opportunity for collective growth. Regular team events, training camps, and social gatherings ensure that our members forge connections beyond the race course, creating enduring friendships that extend beyond the finish line.
      </p>
      <p class='about-par'>
        The Top Gunz Tri Team isn't just about achieving personal milestones; it's about inspiring others and giving back to the community we love. We are true role models to not only fellow triathletes, but to all of our communities. We are proving that it is possible to be successful people on and off the race course. Although we aspire to be our best at all times, we also highlight our failures and know that they will only make us better as we learn from our challenges.
      </p>
      <p class='about-par'>
        Follow along with us and join us on this exhilarating journey as we swim, bike, run, parent, and adult towards new horizons. Whether you're a newcomer to the sport or a seasoned triathlete, we will show you passion, dedication, and help inspire you to heights you never thought possible.
      </p>
      {/* <div class='about-content'>
        <Button class='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Contact Us
        </Button>
      </div> */}
    </div>
    <div class="image-column">
      <img src="/images/homebanner.jpg" alt="Top Gunz Tri Team" />
    </div>
  </div>
    </div>
  );
};

export default MainContent;