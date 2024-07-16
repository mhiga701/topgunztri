import React from "react";
import SponsorProfile from "./SponsorProfile";

const sponsorData = [
    {
        sponsorName: "Wahoo Fitness",
        pictureUrl: '/images/wahoo.png'
    },
    {
        sponsorName: "Ku Cycle",
        pictureUrl: '/images/kucycle.png'
    },

    {
        sponsorName: 'Velo Vetta',
        pictureUrl: '/images/velovetta2.png'
    },

    {
        sponsorName: 'Flo Wheels',
        pictureUrl: '/images/flowheels.png'
    },

    {
        sponsorName: 'BlueSeventy',
        pictureUrl: '/images/blue70.jpeg'
    },
    {
        sponsorName: 'Form Goggles',
        pictureUrl: '/images/formgoggles.jpeg'
    },
    {
        sponsorName: 'Lever Movement',
        pictureUrl: '/images/levermovement.jpeg'
    },
    {
        sponsorName: 'Osmo Nutrition',
        pictureUrl: '/images/osmo.png'
    },
    {
        sponsorName: 'Never Second',
        pictureUrl: '/images/neversecond.jpeg'
    },
    {
        sponsorName: 'Momentous',
        pictureUrl: '/images/momentous.jpeg'
    },
    {
        sponsorName: 'Skratch Labs',
        pictureUrl: '/images/skratchlabs.jpg'
    }, 
    {
        sponsorName: 'The Feed',
        pictureUrl: '/images/thefeed.png'
    }, 
    {
        sponsorName: 'Precision Hydration',
        pictureUrl: '/images/precision.jpeg'
    }, 
    {
        sponsorName: 'Base Performance',
        pictureUrl: '/images/baseperformance.jpg'
    }, 
    {
        sponsorName: 'Vespa Power',
        pictureUrl: '/images/vespa.jpeg'
    },
    {
        sponsorName: 'deltaG',
        pictureUrl: '/images/deltag.jpeg'
    }, 
    {
        sponsorName: 'Omius',
        pictureUrl: '/images/omius.jpeg'
    },
    {
        sponsorName: 'Core Body Temp',
        pictureUrl: '/images/core.jpeg'
    },
    {
        sponsorName: 'Dynamic Triathlete',
        pictureUrl: '/images/dynamic.jpeg'
    },
    {
        sponsorName: 'Swoveralls',
        pictureUrl: '/images/swoveralls2.jpeg'
    }
    
]

const SponsorProfiles = () => {
    return (
      <div className="sponsor-profiles">
        {sponsorData.map((sponsor, index) => (
          <SponsorProfile key={index} sponsor={sponsor} isEven={index % 2 === 0} />
        ))}
      </div>
    );
  };
  
  export default SponsorProfiles;