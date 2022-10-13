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
        enter="transition duration-1000"
        enterFrom=""
        enterTo=""
        leave="transition duration-1000"
        leaveFrom=""
        leaveTo=""
      >
        <Popover.Panel className="relative flex flex-col z-50">
          <div className="fixed inset-x-0 flex flex-col top-24 h-[calc(100%_-_6rem)] duration-1000 ui-disabled:h-[calc(0%_-_6rem)] ui-not-open:h-[calc(0%_-_6rem)] ui-open:animate-aniheight justify-center items-center overflow-hidden bg-background dark:bg-dark-100 mx-8 border border-solid border-primary dark:border-background">
            <div className='flex flex-col justify-center items-center my-4'>
              <a className="font-button text-primary dark:text-background uppercase text-base tracking-wider font-medium my-2" href="#">Home</a>
              <a className="font-button text-primary dark:text-background uppercase text-base tracking-wider font-medium my-2" href="#">About</a>
              <a className="font-button text-primary dark:text-background uppercase text-base tracking-wider font-medium my-2" href="#">Contact</a>
              <a className="font-button text-primary dark:text-background uppercase text-base tracking-wider font-medium my-2" href="#">Start project</a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>


    </Popover>
  )
}
export default Mobilenav;