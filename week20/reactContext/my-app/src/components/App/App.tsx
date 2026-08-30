import { useContext, useState} from 'react'
import ThemeСontext from '../../context/ThemeContext'
import Panel from '../Panel/Panel'
import './App.css'

function App() {
  const contextValue = useContext(ThemeСontext)
  const [theme, setTheme] = useState<string>(contextValue.theme);

  const setUpdater = (value: string) => setTheme(value);
  
  return (
      <ThemeСontext value={{
        theme,
        setUpdater
      }}>
        <Panel />
      </ThemeСontext>
  
  )
}

export default App
