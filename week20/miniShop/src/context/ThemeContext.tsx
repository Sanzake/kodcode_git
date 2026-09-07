import { createContext} from "react"


export type themeContext = {
    theme: string
    toggleTheme: () => void
}

const ThemeСontext = createContext<themeContext>({theme: 'dark', toggleTheme: () => {}})

export default ThemeСontext