import { NavLink } from "react-router";

export default function Header() {
    return (
        <div>
            <NavLink to={"/"}>
                Clima Board
            </NavLink>
            <NavLink to={"/city"}>
                Search city
            </NavLink>
            <NavLink to={"/favorites"}>
                Favorites
            </NavLink>
            <NavLink to={"/compare"}>
                Compare cities
            </NavLink>
            <NavLink to={"/atbash"}>
                Atbash
            </NavLink>
        </div>
    )
}
