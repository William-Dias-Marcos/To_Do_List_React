function List (props){

    return(
        <ul>
            {props.items.map(item=>
                <li key={item.id}>
                    {item.text}
                    <button onClick={()=>{ props.onItemDeleted(item)}}><img alt="delete" src=""></img></button>
                </li>)}
        </ul>
    )
}

export default List;