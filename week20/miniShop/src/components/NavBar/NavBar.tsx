import "./NavBar.css"
import { Link } from "react-router";

export default function () {
  return (
    <div className="bar">
        <Link className="link" to={"/"}>mini shop</Link>
        <div className="menuRight">
          <Link className="link" to={"/"}>Products</Link>
          <Link className="link" to={"/favorites"}>Favorites</Link>
        </div>
    </div>
  )
}
