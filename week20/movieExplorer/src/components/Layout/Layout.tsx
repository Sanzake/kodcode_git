import { Outlet } from 'react-router'
import NavBar from '../NavBar/NavBar'

export default function Layout() {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}
