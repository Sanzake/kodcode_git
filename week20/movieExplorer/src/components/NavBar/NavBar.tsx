import { Link } from 'react-router'
import "./NavBar.css"
import SearchBar from './SearchBar/SearchBar'

export default function () {
  return (
    <div className='navbar'>
        <Link to={"/"} className='link' style={{marginRight: 50}}>Movie explorer</Link>
        <Link to={"/movies"} className='link'>Movies</Link>
        <Link to={"/favorites"} className='link'>Favorites</Link>
        <SearchBar />
    </div>
  )
}
