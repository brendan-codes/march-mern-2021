import { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Create = ({addTodo}) => {

    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState([]);

    const formHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/todos", {title, description})
            .then(response => {
                // success handling
                addTodo(response.data);
                navigate("/");
            })
            .catch(err => {
                console.log(err.response);
                const { errors } = err.response.data;
                const messages = Object.keys(errors).map(error => errors[error].message);
                // error handling
                setErrors(messages)
            })
    }

    return (
       <>
            {
                errors.map((message, i) =>
                    <p key={i}>{message}</p>
                )
            }
            <form onSubmit={formHandler}>
                Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                Description: <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <input type="submit" value="Create note!"/>
            </form>
        </>
    )
}

export default Create;