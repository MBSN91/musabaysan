import React from 'react';
import { Popover } from '@headlessui/react';
import Hamburger from '../../public/assets/lottie/hamburger/Hamburger';

function Mobilenav() {
	return (
		<Popover className="relative flex z-50">
			<Popover.Button as="div">
				<Hamburger />
			</Popover.Button>

			<Popover.Panel className="relative flex flex-col z-50">
				<div className="fixed inset-x-0 flex flex-col top-24 -m-px ui-not-open:h-0 ui-not-open:hidden justify-center items-center overflow-hidden bg-background dark:bg-dark-100 mx-8 border border-solid border-primary dark:border-background">
					<div className="flex flex-col justify-center items-center my-4">
						<a
							className="font-button text-primary dark:text-background uppercase text-base tracking-wider font-medium my-2"
							href="#">
							Home
						</a>
						<a
							className="font-button text-primary dark:text-background uppercase text-base tracking-wider font-medium my-2"
							href="#">
							About
						</a>
						<a
							className="font-button text-primary dark:text-background uppercase text-base tracking-wider font-medium my-2"
							href="#">
							Contact
						</a>
						<a href="#">
							<button class="flex z-10 justify-center items-center space-x-2 p-2 border-solid border-3 text-background bg-primary border-primary rounded-md h-fit transition-width duration-350 ease-in-out group hover:bg-primary-100 dark:hover:bg-orange hover:border-primary-100 dark:hover:border-orange dark:text-primary dark:bg-background dark:border-background">
								<div class="font-button uppercase tracking-widest text-lg whitespace-nowrap">
									Download resume
								</div>
							</button>
						</a>
					</div>
				</div>
			</Popover.Panel>
		</Popover>
	);
}
export default Mobilenav;
