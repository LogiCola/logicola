import Layout from "./Layout";
import Home from "./routes/home";
import NoMatch from "./routes/404";
import ChapterLayout from "./routes/chapter-layout";
import ChaptersIndexPage from "./routes/chapters/index-page";
import ChapterPage from "./routes/chapters/chapter-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <Home /> },
			{
				path: "chapters",
				element: <ChapterLayout />,
				children: [
					{ index: true, element: <ChaptersIndexPage /> },
					{
						path: ":chapterNumber/exercises/:exerciseNumber",
						element: <p>Chapter exercise</p>,
					},
					{ path: ":chapterNumber", element: <ChapterPage /> },
					{ path: "*", element: <NoMatch /> }, // Catch-all route for invalid chapter numbers
				],
			},
			{ path: "contact", element: <p>Contact</p> },
			{ path: "*", element: <NoMatch /> }, // Catch-all route for all other invalid paths
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
