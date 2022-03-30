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

    function onDone(item){

        let updareItems = items.map(it => {
            if (it.id === item.id){
                it.done = !it.done;
            }
            return it;
        })
        setItems(updareItems);
    }

    return(
        <div className='container'>
            <h1>Hello word</h1>
            <Form onAddItem={onAddItem}></Form>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        </div>
    )  
}

export default App;

