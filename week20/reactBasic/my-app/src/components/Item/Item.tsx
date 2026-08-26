import type React from "react";


interface ItemInterface {
	id: string;
	onSelect: (id: string) => void;
}


const Item: React.FC<ItemInterface> = (props) => {
	return (
    <li>
        <button type="button" onClick={() => props.onSelect(props.id)}>
            {props.id}
        </button>
    </li>
    )
};

export default Item;
