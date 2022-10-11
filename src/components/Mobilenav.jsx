import React from 'react'
import { Popover } from '@headlessui/react'
import Hamburger from '../assets/lottie/hamburger/Hamburger';


function Mobilenav() {
    return (
      <Popover className="relative flex z-50">
        
        <Popover.Button>
          <Hamburger />
        </Popover.Button>

        <Popover.Panel className="relative flex flex-col z-50">
          <div className="fixed flex flex-col z-10 inset-0 h-full justify-center items-center bg-secondary">
            <a className="font-button text-primary uppercase text-base tracking-wider font-medium my-2" href="#">Home</a>
            <a className="font-button text-primary uppercase text-base tracking-wider font-medium my-2" href="#">About</a>
            <a className="font-button text-primary uppercase text-base tracking-wider font-medium my-2" href="#">Contact</a>
            <a className="font-button text-primary uppercase text-base tracking-wider font-medium my-2" href="#">Start project</a>
          </div>
        </Popover.Panel>
    </Popover>
  )
}
export default Mobilenav;