import { useContext } from "react";
import { Outlet } from "react-router";
import ThemeСontext from "../../context/themeContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css"

export default function Layout() {
	const contextThemeValue = useContext(ThemeСontext);
	return (
		<div>
			<Header />
			<div
				style={{ padding: 50 }}
				className={contextThemeValue.theme === "light" ? "light" : "dark"}
			>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
