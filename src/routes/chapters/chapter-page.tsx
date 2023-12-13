import React from "react";
import TableOfContent from "@/components/tableOfContent";
import { data } from "@/data";
import { redirect, useParams } from "react-router-dom";

type PathParams = {
	chapterNumber: keyof typeof data.chapters;
};

const Redirect = ({ to }: { to: string }) => {
	redirect(to);
	return null;
};

const ChapterPage: React.FC = () => {
	const { chapterNumber } = useParams<PathParams>();
	console.log(chapterNumber);

	if (!chapterNumber || !data.chapters[chapterNumber]) {
		return <Redirect to="/chapters/404" />;
	}

	const chapterData = data.chapters[chapterNumber];

	console.log("test");

	return (
		<div className="w-full">
			<TableOfContent
				title={chapterData.title}
				sections={chapterData.sections}
			/>
		</div>
	);
};

export default ChapterPage;
