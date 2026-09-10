import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import CityPage from './pages/CityPage/CityPage'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<HomePage />}></Route>
          <Route path={"/city"} element={<CityPage />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
