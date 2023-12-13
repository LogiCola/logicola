import React from "react";
import TableOfContent from "@/components/tableOfContent";
import { data } from "@/data";

const ChaptersIndexPage: React.FC = () => {
	return (
		<div className="w-full">
			{Object.entries(data.chapters).map(([chapterNumber, chapterData]) => (
				<TableOfContent
					key={chapterNumber}
					title={chapterData.title}
					sections={chapterData.sections}
				/>
			))}
		</div>
	);
};

export default ChaptersIndexPage;
