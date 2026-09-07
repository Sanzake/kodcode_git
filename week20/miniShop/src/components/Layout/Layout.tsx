import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout() {
	return (
		<div>
			<Header />
			<div style={{padding: 50}}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
