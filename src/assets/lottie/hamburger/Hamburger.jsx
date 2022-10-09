import React from 'react';
import Hamburgericon from './hamburger.json';
import { Player } from '@lottiefiles/react-lottie-player';


function Hamburger() {
  return (
    <div className="mr-5 m-6">
      <Player
          src={ Hamburgericon }
          autoplay={false}
          loop={false}
          keepLastFrame={true}
          style = 
          {
            { 
              width:'32px',
              height:'32px', 
            }
          }
      />
    </div>
 ) 
}

export default Hamburger;