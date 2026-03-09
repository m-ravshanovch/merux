import { useEffect, useState } from 'react';
import type { Theme} from './ThemeContext';
import { ThemeContext } from './ThemeContext';


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(()=>{
       return localStorage.getItem("theme") as Theme || "light"
    })

    useEffect(()=>{
        document.documentElement.classList.toggle("dark",theme==="dark")
        localStorage.setItem("theme", theme)
    },[theme])

    const tooggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme: tooggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}