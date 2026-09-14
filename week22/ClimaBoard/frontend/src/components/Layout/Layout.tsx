import Header from './Header/Header'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'
import "./Layout.css"

export default function Layout() {
    return (
        <div className='layout'>
            <Header />
            <div className='mainContent'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
