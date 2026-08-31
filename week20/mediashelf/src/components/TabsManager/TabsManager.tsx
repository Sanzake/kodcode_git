import "./TabsManager.css";
import clsx from "clsx";

interface TabsManagerProps {
	selected: string;
	select: (param: string) => void;
}

const TabsManager: React.FC<TabsManagerProps> = (props) => {
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

export default TabsManager;
