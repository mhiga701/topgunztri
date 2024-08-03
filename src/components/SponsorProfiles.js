import React from "react";
import SponsorProfile from "./SponsorProfile";

const sponsorData = [
    {
        sponsorName: "Wahoo Fitness",
        pictureUrl: '/images/wahoo.png',
        webUrl: 'https://www.wahoofitness.com/'
    },

    {
        sponsorName: 'BlueSeventy',
        pictureUrl: '/images/blue70.jpeg',
        webUrl: 'https://www.blueseventy.com/'
    },
  
    {
        sponsorName: 'Lever Movement',
        pictureUrl: '/images/levermovement.jpeg',
        webUrl: 'https://levermovement.com/'
    },
    {
        sponsorName: 'Osmo Nutrition',
        pictureUrl: '/images/osmo.png',
        webUrl: 'https://osmonutrition.com/'
    },
    {
        sponsorName: 'Precision Hydration',
        pictureUrl: '/images/precision.jpeg',
        webUrl: 'https://www.precisionhydration.com/'
    }, 
    {
        sponsorName: 'Base Performance',
        pictureUrl: '/images/baseperformance.jpg',
        webUrl: 'https://baseperformance.com/'
    }, 
    {
        sponsorName: 'Vespa Power',
        pictureUrl: '/images/vespa.jpeg',
        webUrl: 'https://vespapower.com/'
    },
    {
        sponsorName: 'deltaG',
        pictureUrl: '/images/deltag.jpeg',
        webUrl: 'https://www.deltagketones.com/'
    }, 
    {
        sponsorName: 'Momentous',
        pictureUrl: '/images/momentous.jpeg',
        webUrl: 'https://www.livemomentous.com/'
    },
    {
        sponsorName: 'Skratch Labs',
        pictureUrl: '/images/skratchlabs.jpg',
        webUrl: 'https://www.skratchlabs.com/'
    }, 
    {
        sponsorName: 'Dynamic Triathlete',
        pictureUrl: '/images/dynamic.jpeg',
        webUrl: 'https://www.dynamictriathlete.com/'
    },
    {
        sponsorName: 'Swoveralls',
        pictureUrl: '/images/swoveralls2.jpeg',
        webUrl: 'https://swoveralls.com/'
    },
    {
        sponsorName: "Ku Cycle",
        pictureUrl: '/images/kucycle.png',
        webUrl: 'https://ku-cycle.com/'
    },

    {
        sponsorName: 'Velo Vetta',
        pictureUrl: '/images/velovetta2.png',
        webUrl: 'https://www.velovetta.com/'
    },

    {
        sponsorName: 'Core Body Temp',
        pictureUrl: '/images/core.jpeg',
        webUrl: 'https://corebodytemp.com/'
    },
    {
        sponsorName: 'Form Goggles',
        pictureUrl: '/images/formgoggles.jpeg',
        webUrl: 'https://www.formswim.com/'
    },
    {
        sponsorName: 'Never Second',
        pictureUrl: '/images/neversecond.jpeg',
        webUrl: 'https://never2.com/'
    },

    {
        sponsorName: 'The Feed',
        pictureUrl: '/images/thefeed.png',
        webUrl: 'https://thefeed.com/'
    }, 
   
    {
        sponsorName: 'Omius',
        pictureUrl: '/images/omius.jpeg',
        webUrl: 'https://www.omius.io/'
    },
    {
        sponsorName: 'Flo Wheels',
        pictureUrl: '/images/flowheels.png',
        webUrl: 'https://flocycling.com/'
    },
 
    
    
]

const SponsorProfiles = () => {
    return (
      <div className="sponsor-profile">
        {sponsorData.map((sponsor, index) => (
          <SponsorProfile key={index} sponsor={sponsor} isEven={index % 2 === 0} />
        ))}
      </div>
    );
  };
  
  export default SponsorProfiles;