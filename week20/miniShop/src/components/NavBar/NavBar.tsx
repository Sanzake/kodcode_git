import { favoriteStore } from "../../store/favoriteStore";
import "./NavBar.css"
import { NavLink } from "react-router";

export default function NavBar() {
  const products = favoriteStore((s) => s.favorites)
  return (
    <div className="bar">
      <h3 className="shopTitle">Mini shop</h3>

      <div className="menuRight">
        <NavLink to={"/"} className={({isActive}) => (isActive ? "link active" : "link")}>
          Products
        </NavLink>
        
        <NavLink to={"/favorites"} className={({isActive}) => (isActive ? "link active" : "link")}>
          Favorites ({products.length})
        </NavLink>

      </div>
    </div>
  )
}
