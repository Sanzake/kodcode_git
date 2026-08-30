import "./Tabs.css";
import clsx from "clsx";

interface TabsProps {
	selected: string;
	select: (param: string) => void;
}

const Tabs: React.FC<TabsProps> = (props) => {
	return (
		<div>
			<button
				className={`${props.selected === "Books" ? "active" : ""}`}
				type="button"
				onClick={() => props.select("Books")}
			>
				Books
			</button>
			<button
				className={clsx({ active: props.selected === "Movies" })}
				type="button"
				onClick={() => props.select("Movies")}
			>
				Movies
			</button>
		</div>
	);
};

export default Tabs;
