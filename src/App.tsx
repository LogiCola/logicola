import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./routes/home";
import NoMatch from "./routes/404";
import Chapter from "./routes/chapter";
import ChapterLayout from "./routes/chapterLayout";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="chapter" element={<ChapterLayout />}>
						<Route path=":chapterNumber" element={<Chapter />} />
					</Route>
					<Route path="contact" element={<p>Contact</p>} />

					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</>
	);
}
