import React, { useState } from 'react' 
import '../App.css'

function Form (props){

    const [text, setText] = useState("");

    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }

    function addItem(event){
        event.preventDefault();
        if (text){
            props.onAddItem(text);
            setText("");
        }
    }

    return(
        <form>
            <input className="textItem" onChange={handleChange} type="text" value={text}></input>
            <button className="addItem" onClick={addItem}>Add</button>
        </form>
    )
}

export default Form;