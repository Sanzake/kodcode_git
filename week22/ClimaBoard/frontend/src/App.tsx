import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import CityPage from './pages/CityPage/CityPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/city"} element={<CityPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
