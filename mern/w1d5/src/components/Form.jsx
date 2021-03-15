import React, { useState } from 'react';

const Form = (props) => {
    let { name, setName } = props;

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [error, setError] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();

        // ??
        if(inputName.length < 3){
            setError("Name is too short!")
        }else if(inputName.length > 13){
            setError("Name is too long!")
        }else{
            setError("Name Accepted!");
            setName(inputName);
            setInputName("");
         }

    }

    return (
        <div>
            <p>{error}</p>
            <form onSubmit={submitHandler}>
                {inputName}, {inputEmail}
                <br />
                <input type="text" value={inputName} onChange={e => setInputName(e.target.value)}/>
                <br />
                <input type="text" value={inputEmail} onChange={e => setInputEmail(e.target.value)}/>
                <br />
                <input type="submit" value={`Change ${name}'s name`}/>
            </form>
        </div>
    )
}

export default Form;