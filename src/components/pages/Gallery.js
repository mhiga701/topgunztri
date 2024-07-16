import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Gallery.css';

export default function Gallery() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const numTeamPhotos = 9; // Adjust the number of photos as needed
const teamPhotos = Array.from({ length: numTeamPhotos }, (_, index) => `/images/team/team${index + 1}.jpg`);
const numSwimPhotos = 10; // Adjust the number of photos as needed
const swimPhotos = Array.from({ length: numSwimPhotos }, (_, index) => `/images/swim/swim${index + 1}.jpg`);
const numBikePhotos = 10; // Adjust the number of photos as needed
const bikePhotos = Array.from({ length: numBikePhotos }, (_, index) => `/images/bike/bike${index + 1}.jpg`);
const numRunPhotos = 10; // Adjust the number of photos as needed
const runPhotos = Array.from({ length: numRunPhotos }, (_, index) => `/images/run/run${index + 1}.jpg`);


  return (
<div className="gallery">
    <div className="team-gallery">
      <h2 className='teamh2'>Team Photos</h2>
      <Carousel responsive={responsive}>
        {teamPhotos.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Team Photo ${index + 1}`} style={{ width: "100%", height: "auto" }} />
          </div>
        ))}
      </Carousel>
    </div>

    <div className="swim-gallery">
    <h2 className='swimh2'>Swim Photos</h2>
    <Carousel responsive={responsive}>
    {swimPhotos.map((img, index) => (
        <div key={index}>
        <img src={img} alt={`swim Photo ${index + 1}`} style={{ width: "100%", height: "auto" }} />
        </div>
    ))}
    </Carousel>
    </div>

    <div className="bike-gallery">
    <h2 className='bikeh2'>Bike Photos</h2>
    <Carousel responsive={responsive}>
    {bikePhotos.map((img, index) => (
        <div key={index}>
        <img src={img} alt={`bike Photo ${index + 1}`} style={{ width: "100%", height: "auto" }} />
        </div>
    ))}
    </Carousel>
    </div>

    <div className="run-gallery">
    <h2 className='runh2'>Run Photos</h2>
    <Carousel responsive={responsive}>
    {runPhotos.map((img, index) => (
        <div key={index}>
        <img src={img} alt={`run Photo ${index + 1}`} style={{ width: "100%", height: "auto" }} />
        </div>
    ))}
    </Carousel>
    </div>
</div>
  );
}
