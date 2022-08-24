const BasketItems = ({allItems, deleteHandler}) => {
    
    const PrintItem = ({itemName, id}) => 
        <li>
        ID: {id} : Item Name: {itemName}
        <button onClick={() => deleteHandler(id)}>X</button>
        </li>
    

    return (
        <>
        <ul>
            {allItems.map((itemName, i) => 
                <PrintItem id={i} itemName={itemName} />
            )}
        </ul>
        </>
    )
};

export default BasketItems;