import { useEffect } from 'react';

const User = (props) => {

    useEffect(() => {
        console.log(props.id)
    }, [])

    return (
        <div>
            <h3>Hello I am User</h3>
        </div>
    )
}

export default User;