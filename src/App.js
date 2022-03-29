import React, { useState } from 'react' 
import List from './Components/List'
import Form from './Components/Form'
import Item from './Components/Item'
import './App.css';

function App() {

    const [items, setItems] = useState([]);

    function onAddItem(text){
        let it = new Item(text)
        setItems([...items, it])
    }


    function onItemDeleted(item){

        let filteredItems = items.filter(it => it.id !== item.id)

        setItems(filteredItems)
    }

    return(
        <div className='container'>
            <h1>Hello word</h1>
            <Form onAddItem={onAddItem}></Form>
            <List onItemDeleted={onItemDeleted} items={items}></List>
        </div>
    )  
}

export default App;

