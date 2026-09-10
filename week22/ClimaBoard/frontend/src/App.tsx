import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import CityPage from './pages/CityPage/CityPage'
import Layout from './components/Layout/Layout'
import Protected from './components/Protected/Protected'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<HomePage />}></Route>
          <Route path={"/city"} element={<Protected><CityPage /></Protected>}></Route>
          <Route path='*' element={<>404 - Not Found!</>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
