import BigCounter from "../BigCounter/BigCounter";
import SmallCounter from "../SmallCounter/SmallCounter";
import Theme from "../Theme/Theme";
import "./App.css";

function App() {
	return (
		<div>
			<SmallCounter />
			<BigCounter />
			<Theme />
		</div>
	);
}

export default App;
