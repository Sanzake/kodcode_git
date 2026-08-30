import { useContext } from "react";
import ThemeСontext from "../../context/ThemeContext";


export default function Avatar() {
  const context = useContext(ThemeСontext);
	return (
		<div>
			<p>my avatar</p>
			<p>
        <button type="button" onClick={() =>  context.setUpdater("dark")}>{context.theme}</button>
      </p>
		</div>
	);
}
