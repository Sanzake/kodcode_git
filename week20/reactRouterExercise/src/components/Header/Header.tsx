import { Link } from 'react-router'

export default function Header() {
  return (
    <div>
        <Link to={"/"} style={{margin:10}}>Home </Link>
        <Link to={"/about"} style={{margin:10}}>About </Link>
        <Link to={"/users/42"} style={{margin:10}}>User 42 </Link>
    </div>
  )
}
