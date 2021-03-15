import {useState} from 'react';

const Box = ({box, index, deleteBox, updateBox}) => {
    return (
           <span
            style={{
                    'backgroundColor': box.color,
                    height: '200px',
                    width: '200px',
                    display: "inline-block",
                    verticalAlign: "top",
                    textDecoration: box.status ? "line-through" : ""
                    }}>
                        This is the {box.color} box
                <p>This box is true <input
                                        type="checkbox"
                                        checked={box.status}
                                        onChange={e => updateBox(index)}/>
                </p>
                <button onClick={(e) => deleteBox(index)}>Delete</button>
            </span>
    )
}

export default Box;