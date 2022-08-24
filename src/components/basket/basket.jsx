import { useState } from "react";
import AddItems from "./addItems"
import BasketItems from "./basketItems";

const Basket = () => {
    
    const [contents, setContents] = useState([]);
    const [itemName, setItemName] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const handleUpdate = ({target}) => {
        setItemName(target.value);
    };

    const handleAdd = () => {
        setContents(contents => [...contents, itemName])
    }

    const handleDelete = (id) => {
        const tempContents = [...contents];
        tempContents.splice(id, 1);
        setContents(tempContents)
    }

    return (
        <>
        <AddItems submitHandler={submitHandler} addHandler={handleAdd} updateHandler={handleUpdate}></AddItems>
        <BasketItems allItems={contents} deleteHandler={handleDelete}></BasketItems>
        </>
    )
};

export default Basket;