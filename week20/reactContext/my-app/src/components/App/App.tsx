import { useContext, useState} from 'react'
import ThemeСontext from '../../context/ThemeContext'
import Panel from '../Panel/Panel'
import './App.css'
import OutContextComponent from '../OutContextComponent/OutContextComponent'

function App() {
  const contextValue = useContext(ThemeСontext)
  const [theme, setTheme] = useState<string>(contextValue.theme);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  
  return (
    <>
      <ThemeСontext value={{
        theme,
        toggleTheme
      }}>
        <Panel />
      </ThemeСontext>
      <OutContextComponent />
    </>
  
  )
}

export default App
