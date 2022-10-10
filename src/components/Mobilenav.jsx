import React from 'react'
import { Popover } from '@headlessui/react'
import Hamburger from '../assets/lottie/hamburger/Hamburger';


function Mobilenav() {
    return (
      <Popover className="relative">
        
        <Popover.Button>
          <Hamburger />
        </Popover.Button>

        <Popover.Panel className="relative z-10">
          <div className="flex flex-col fixed inset-x-0 top-24 bottom-0 justify-center items-center">
            <a className="font-button text-primary" href="#">Home</a>
            <a className="font-button text-primary" href="#">About</a>
            <a className="font-button text-primary" href="#">Contact</a>
            <a className="font-button text-primary" href="#">Start project</a>
          </div>
        </Popover.Panel>
    </Popover>
  )
}
export default Mobilenav;