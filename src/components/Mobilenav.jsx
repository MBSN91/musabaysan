import React from 'react'
import { Popover } from '@headlessui/react'
import Hamburger from '../assets/lottie/hamburger/hamburger.jsx';


function Mobilenav() {
    return (
      <Popover className="relative">
      <Popover.Button><Hamburger /></Popover.Button>
      <Popover.Overlay/>
      <Popover.Panel className="absolute z-10 inset-x-0 top-20 bottom-0">
        <div className="flex flex-col fixed inset-0 justify-center items-center backdrop-blur">
          <a className=' font-button text-primary' href="/analytics">Analytics</a>
          <a className=' font-button text-primary' href="/engagement">Engagement</a>
          <a className=' font-button text-primary' href="/security">Security</a>
          <a className=' font-button text-primary' href="/integrations">Integrations</a>
        </div>
      </Popover.Panel>
    </Popover>
  )
}
export default Mobilenav;