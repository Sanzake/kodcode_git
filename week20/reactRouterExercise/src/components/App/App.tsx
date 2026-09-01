import About from '../../pages/About'
import Home from '../../pages/Home'
import UserPage from '../../pages/UserPage'
import Layout from '../Layout/Layout'
import Protected from '../Protected/Protected'
import './App.css'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          
          <Route path='/users/:id' element={<Protected><UserPage/></Protected>}/>

          <Route path='*' element={<>404 Not found</>}/>
        </Route>
      </Routes>
    </div>
     )
}

export default App
