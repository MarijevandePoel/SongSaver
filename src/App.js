import Container from "./Components/Container";
import NavBar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<NavBar />}>
					<Route index element={<Container />} />
					<Route path="AboutUs" element={<AboutUs />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
