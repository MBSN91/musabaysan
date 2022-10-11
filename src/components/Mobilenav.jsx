import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import Hamburger from '../assets/lottie/hamburger/Hamburger';


function Mobilenav() {
    return (
      <Popover className="relative flex z-50">
        
        <Popover.Button>
          <Hamburger />
        </Popover.Button>

        <Transition
        enter="transition duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
                <Popover.Panel className="relative flex flex-col z-50">
          <div className="fixed flex flex-col inset-x-0 top-24 h-full justify-center items-center overflow-hidden">
            <a className="font-button text-primary uppercase text-base tracking-wider font-medium my-2" href="#">Home</a>
            <a className="font-button text-primary uppercase text-base tracking-wider font-medium my-2" href="#">About</a>
            <a className="font-button text-primary uppercase text-base tracking-wider font-medium my-2" href="#">Contact</a>
            <a className="font-button text-primary uppercase text-base tracking-wider font-medium my-2" href="#">Start project</a>
          </div>
        </Popover.Panel>
      </Transition>


    </Popover>
  )
}
export default Mobilenav;