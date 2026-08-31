import "./App.css";
import { useEffect, useState } from "react";
import Pages from "../Pages/Pages";
import Loading from "../Loading/Loading";

function App() {
	const [isReadyToLoad, setIsReadyToLoad] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsReadyToLoad(true);
		}, 3000);

		return () => clearTimeout(timer)
	}, []);
	
	return (
		<>
		{isReadyToLoad ? <Pages /> : <Loading />}
		</>
	);
}

export default App;
