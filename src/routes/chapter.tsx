import { useParams } from "react-router-dom";

type PathParams = {
	chapterNumber: string;
};

const Chapter = () => {
	const { chapterNumber } = useParams<PathParams>();
	return <div>chapter {chapterNumber}</div>;
};

export default Chapter;
