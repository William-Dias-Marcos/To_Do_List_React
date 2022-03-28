import React, { useState } from 'react' 
import List from './Components/List'
import Form from './Components/Form'
import './App.css';

function App() {

    const [items, setItems] = useState([]);

    function onAddItem(item){
        setItems([...items, item])
    }


    return(
        <div className='container'>
            <h1>Hello word</h1>
            <Form onAddItem={onAddItem}></Form>
            <List items={items}></List>
        </div>
    )  
}

export default App;

