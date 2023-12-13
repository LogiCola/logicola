import { Sidebar } from "@/components/sidebar";
import { Outlet } from "react-router-dom";

const ChapterLayout = () => {
	return (
		<div className="flex">
			<Sidebar />
			<Outlet />
		</div>
	);
};

export default ChapterLayout;
