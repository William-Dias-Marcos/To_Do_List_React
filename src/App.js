import React, { useEffect, useState } from 'react' 
import List from './Components/List'
import Form from './Components/Form'
import Item from './Components/Item'
import Modal from './Components/Modal'
import './App.css';

const Saved = "savedItems"

function App() {

    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState([]);

    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(Saved))
        if(savedItems){
            setItems(savedItems)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem(Saved, JSON.stringify(items))
    },[items])

    function onAddItem(text){ 
        let it = new Item(text)
        setItems([...items, it])
        onHideModal();
    }

    function onItemDeleted(item){

        let filteredItems = items.filter(it => it.id !== item.id)
        setItems(filteredItems)
    }

    function onTaskDeleted(){

        setItems([])
        localStorage.removeItem(Saved)
    }

    function onDone(item){

        let updatedItems = items.map(it => {
            if (it.id === item.id){
                it.done = !it.done;
            }
            return it;
        })
        setItems(updatedItems);
    }
    
    function onHideModal(event){
       setShowModal(false)
    }

    return(
        <div className='container'>

            <header className='header'>
                <h1>My Tasks</h1>
                <button onClick={()=>{setShowModal(true)}} className='addButtom'>+</button>
            </header>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

            <Modal show={showModal} onHideModal={onHideModal}><Form onAddItem={onAddItem}></Form></Modal>

            <button onClick={onTaskDeleted} className='dellTasks'><img className="dellImg" alt='delete all' src="./assets/dellAll.png"></img></button>
        </div>
    )  
}

export default App;

