import axios from "axios";

const List = ({todos, deleteTodo}) => {

    const axiosDelete = (id) => {
        axios.delete(`http://localhost:8000/todo/${id}`)
            .then(response => {
                console.log(response)
                deleteTodo(id);
            })
            .catch(err => {console.log(err)})
    }

    return (
        <>
            {
                todos.map((todo, idx) =>
                    <div key={idx}>
                        <p>Title: {todo.title}</p>
                        <p>description: {todo.description}</p>
                        <p>Completed: <input type="checkbox" checked={todo.completed}></input></p>
                        <p>Date: {Date(todo.createdAt)}</p>
                        <p><button onClick={() => axiosDelete(todo._id)}>Delete me!</button></p>
                        <hr />
                    </div>
                )
            }
        </>
    )
}

export default List;