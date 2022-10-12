import React, { useState, useEffect} from 'react'
import IoSunny from './../assets/sunny.svg'
import IoMoon from './../assets/moon.svg'

const themes = ['light', 'dark']

export default function ThemeToggle(){
    const [isMounted, setIsMounted] = useState(false)
    const [theme, setTheme] = useState(() => {
        if (import.meta.env.SSR) {
            return undefined
        }
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme')
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        }
        return 'light'
    })
    const toggleTheme = () => {
        const t = theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', t)
        setTheme(t)
    }
    useEffect(()=> {
        const root = document.documentElement
        if (theme === 'light') {
            root.classList.remove('dark')}
        else {
            root.classList.add('dark')}    
    }, [theme])


useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-orange-300 dark:bg-zinc-600">
      {themes.map(t => {
        const checked = t === theme
        return (
          <button
            key={t}
            className={`${
              checked ? 'bg-white text-black fill-primary h-6' : ''
            } cursor-pointer rounded-3xl p-2 h-6 fill-primary`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {t === 'light' ? <IoSunny /> : <IoMoon />}
          </button>
        )
      })}
    </div>
  ) : (
    <div />
  )
}