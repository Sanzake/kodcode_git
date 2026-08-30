import { createContext} from "react"


export type themeContext = {
    theme: string
    setUpdater: (item: string) => void
}

const ThemeСontext = createContext<themeContext>({theme: 'light', setUpdater: () => {}})

export default ThemeСontext