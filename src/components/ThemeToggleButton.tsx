import React, { useState, useEffect } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5/index.js';

const themes = ['light', 'dark'];

export default function ThemeToggle() {
	const [isMounted, setIsMounted] = useState(false);
	const [theme, setTheme] = useState(() => {
		if (import.meta.env.SSR) {
			return undefined;
		}
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		return 'light';
	});
	const toggleTheme = () => {
		const t = theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', t);
		setTheme(t);
	};
	useEffect(() => {
		const root = document.documentElement;
		if (theme === 'light') {
			root.classList.remove('dark');
		} else {
			root.classList.add('dark');
		}
	}, [theme]);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return isMounted ? (
		<div className="transition group ease-in-out duration-300 inline-flex items-center p-[3px] rounded-3xl bg-orange dark:bg-orange-reverse border-solid border-2 border-primary hover:border-secondary dark:hover:border-secondary dark:border-grey-100 text-primary dark:text-background">
			{themes.map((t) => {
				const checked = t === theme;
				return (
					<button
						key={t}
						className={`${
							checked
								? 'transition ease-in-out duration-300 bg-primary group-hover:bg-secondary text-background dark:bg-dark-100 dark:text-background'
								: ''
						} cursor-pointer rounded-3xl p-1`}
						onClick={toggleTheme}
						aria-label="Toggle theme">
						{t === 'light' ? <IoSunny /> : <IoMoon />}
					</button>
				);
			})}
		</div>
	) : (
		<div />
	);
}
