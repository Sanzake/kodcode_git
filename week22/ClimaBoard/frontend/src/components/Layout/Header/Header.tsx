import { NavLink } from "react-router";
import "./Header.css"

export default function Header() {
    return (
        <div className="navBar">
                <div>
                    <NavLink className="navTitle" to={"/"}>
                        Clima Board
                    </NavLink>
                </div>
                <div className="navLinks">
                    <NavLink className="link" to={"/city"}>
                        Search city
                    </NavLink>
                    <NavLink className="link" to={"/favorites"}>
                        Favorites
                    </NavLink>
                    <NavLink className="link" to={"/compare"}>
                        Compare cities
                    </NavLink>
                    <NavLink className="link" to={"/atbash"}>
                        Atbash
                    </NavLink>
                </div>
        </div>
    )
}
