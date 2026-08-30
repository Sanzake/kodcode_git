import type React from "react";
import { useState } from "react";
import type { Book, Movie} from "../../config/config";

interface AddItemFormProps {
	add: (item: Book | Movie) => void
    type: "book" | "movie"
}

const AddItemForm: React.FC<AddItemFormProps> = (props) => {
	const [formData, setFormData] = useState({
        title: "",
        author: "",
        pages: 0
    })

    const [idCounter, setIdCounter] = useState(1)
    

    const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({...prev, [event.target.id]: event.target.value}))

    const onSubmitForm = (event) => {
        event.preventDefault();    
        setIdCounter(idCounter + 1)

        if (props.type === "book") {
            props.add({
                id: String(idCounter),
                title: formData.title,
                author: formData.author,
                pages: formData.pages,
                finished: false
            })
        }

        if (props.type === "movie"){
            props.add({
                id: String(idCounter),
                title: formData.title,
                director: formData.author,
                durationMinutes: formData.pages,
                finished: false
            })
        }
        
    }

    return (
        <div style={{ color: "white" }}>
            <form id="bookForm" onSubmit={onSubmitForm}>
                Add {props.type}:
                <input onChange={onChangeField} type="text" id="author" placeholder={props.type === "book" ? "Author" : "Director"} required />
                <input onChange={onChangeField} type="text" id="title" placeholder="Title" required />
                <input onChange={onChangeField} type="number" id="pages" placeholder={props.type === "book" ? "Pages" : "Duration in minutes"} required />
                <button type="submit">Add</button>
            </form>
        </div>
    );

}

export default AddItemForm;
