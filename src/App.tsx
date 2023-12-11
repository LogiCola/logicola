import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./routes/home";
import NoMatch from "./routes/404";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<p>About</p>} />
					<Route path="contact" element={<p>Contact</p>} />

					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</>
	);
}
