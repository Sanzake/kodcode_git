
import Footer from "../Footer/Footer.tsx";
import Header from "../Header/Header.tsx";
import Main from "../Main/Main.tsx";

function App() {
	return (
		<>
			<section style={{backgroundColor: "lightcyan"}}>
				<Header />
			</section>

			<section style={{ backgroundColor: "lightcoral" }}>

				<Main />
			</section>

			<section style={{ backgroundColor: "lightgreen" }}>
				<Footer />
			</section>
		</>
	);
}


export default App;
