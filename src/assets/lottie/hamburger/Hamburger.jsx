import React from 'react';
import Hamburgericon from './hamburger.json';
import { Player } from '@lottiefiles/react-lottie-player';


function Hamburger() {
  return (
    <>
    <div className='z-50 block dark:hidden'>
      <Player
          src={ Hamburgericon }
          autoplay={false}
          loop={false}
          keepLastFrame={true}
          style = 
          {
            { 
              filter: 'invert(7%) sepia(15%) saturate(5666%) hue-rotate(185deg) brightness(100%) contrast(99%)',
              width:'32px',
              height:'32px', 
            }
          }
      />
    </div>
    
    <div className='z-50 hidden dark:block'>
    <Player
        src={ Hamburgericon }
        autoplay={false}
        loop={false}
        keepLastFrame={true}
        style = 
        {
          { 
            filter: 'invert(98%) sepia(99%) saturate(207%) hue-rotate(295deg) brightness(103%) contrast(95%)',
            width:'32px',
            height:'32px', 
          }
        }
    />
    </div>
    </> 
 ) 
}

export default Hamburger;