import { useState, useEffect } from 'react'

export const useDarkMode = () =>{
  const [theme, setTheme] = useState('dark')

  const setMode = (mode:string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode)
  }

  const toggleTheme : React.MouseEventHandler = () => {
    theme ==="dark" ? setMode("light"):setMode("dark")
  }

  useEffect(() => {
    const getTheme = window.localStorage.getItem("theme")
    getTheme ? setTheme(getTheme) : setMode("dark")
  }, [])

  return [theme, toggleTheme]
}