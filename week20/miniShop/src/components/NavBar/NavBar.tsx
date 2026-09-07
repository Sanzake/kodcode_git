import { useContext} from "react";
import { favoriteStore } from "../../store/favoriteStore";
import "./NavBar.css"
import { NavLink } from "react-router";
import ThemeСontext from "../../context/themeContext";

export default function NavBar() {
  const themeContextValue = useContext(ThemeСontext);
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
      <button type="button" className="themeButton" onClick={themeContextValue.toggleTheme}>{themeContextValue.theme === "light" ? "🌝" : "🌚"}</button>
    </div>
  )
}
