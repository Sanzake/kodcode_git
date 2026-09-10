import Header from './Header/Header'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
