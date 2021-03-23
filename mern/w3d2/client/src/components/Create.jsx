import { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Create = ({addNote}) => {

    const [content, setContent] = useState("");
    const [err, setErr] = useState("");

    const formHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/notes", {content: content})
            .then(response => {
                // success handling
                addNote(response.data);
                navigate("/");
            })
            .catch(err => {
                // error handling
                console.log(err.response);
                setErr("Something went wrong");
            })
    }

    return (
       <>
            <form onSubmit={formHandler}>
                <p>{content}</p>
                <p>{err}</p>
                Note: <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
                <input type="submit" value="Create note!"/>
            </form>
        </>
    )
}

export default Create;