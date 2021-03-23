import axios from "axios";

const List = ({notes, deleteNote}) => {

    const axiosDelete = (id) => {
        axios.delete(`http://localhost:8000/notes/${id}`)
            .then(response => {
                console.log(response)
                deleteNote(id);
            })
            .catch(err => {console.log(err)})
    }

    return (
        <>
            {
                notes.map((note, idx) =>
                    <div key={idx}>
                        <p>Content: {note.content}</p>
                        <p>Date: {Date(note.createdAt)}</p>
                        <p><button onClick={() => axiosDelete(note._id)}>Delete me!</button></p>
                        <hr />
                    </div>
                )
            }
        </>
    )
}

export default List;