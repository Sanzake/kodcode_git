import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import Input from "../Input/Input";
import Item from "../Item/Item";
import NewsCard from "../NewsCard/NewsCard";

const handleClick = (): void => {
	alert("clicked");
};

const handleClickOnLi = (id: string): void => {
    console.log(`choosen ${id}`)
}

export default function main() {
	return (
		<div>
      <Divider />
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6m8SgGqc6ALVOomOx4ILKUD62XOvEC6AG4CwNWJOuwlz7zgm1GaQl9I&s=10"
				alt="" 
        style={{margin: 20}}
        />
			<Divider />
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6m8SgGqc6ALVOomOx4ILKUD62XOvEC6AG4CwNWJOuwlz7zgm1GaQl9I&s=10"
				alt=""
        style={{margin: 20}}
			/>
			<Divider />
			<NewsCard title="hello" />
			<NewsCard title="tumtum" />
			<NewsCard title="brbr" />
			<Divider />
			<Input label="Your input: " />
			<Divider />
			<Button label="Click on me" onClick={handleClick} />
			<Divider />
			<Item id="1" onSelect={handleClickOnLi}/>
			<Item id="2" onSelect={handleClickOnLi}/>
			<Item id="3" onSelect={handleClickOnLi}/>
			<Item id="4" onSelect={handleClickOnLi}/>
			<Divider />
		</div>
	);
}
