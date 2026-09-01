import { Route, Routes } from "react-router";
import "./App.css";
import Home from "../../pages/Home";
import User from "../../pages/User";
import Users from "../../pages/Users";
import Layout from "../Layout/Layout";

function App() {
	return (
		<div>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/users" element={<Users />} />
					<Route path="/users/:id" element={<User />} />
				</Route>
				<Route path="*" element={<>404 Not found</>} />
			</Routes>
		</div>
	);
}

export default App;
