import { useState } from "react";

const FullName = () => {
    const [form, setForm] = useState({name: "", age: 0})


    return (
    <button type="button" onClick={() => setForm(prev => ({...prev, name:"Dana", age:28}))}>
        Name: {form.name} - Age: {form.age}
    </button>
    )
}

export default FullName