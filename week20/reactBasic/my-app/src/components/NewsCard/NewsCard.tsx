interface NewsCardProps {
	title: string;
	imgSrc?: string;
}

import type React from "react";

const NewsCard: React.FC<NewsCardProps> = (props) => {
	return <h1>{props.title}</h1>;
};

export default NewsCard;
