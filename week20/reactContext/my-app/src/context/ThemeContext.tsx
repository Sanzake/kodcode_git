import { createContext} from "react"


export type themeContext = {
    theme: string
    toggleTheme: () => void
}

const ThemeСontext = createContext<themeContext>({theme: 'light', toggleTheme: () => {}})

export default ThemeСontext