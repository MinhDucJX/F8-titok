import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvide({ children }) {
    const [bg, setBg] = useState("dark");
    

    const handleTheme = () => {
        setBg(bg === "light" ? "dark" : "light");
    }

    const value = {
        bg,
        handleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}


export { ThemeProvide, ThemeContext }