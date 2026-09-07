import { useContext } from "react";
import { Outlet } from "react-router";
import ThemeСontext from "../../context/ThemeContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css"

export default function Layout() {
	const contextThemeValue = useContext(ThemeСontext);
	const themeClass = contextThemeValue.theme === "light" ? "light" : "dark"
	return (
		<div className={`layout ${themeClass}`}>
			<Header />
			<div className="main-content">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
