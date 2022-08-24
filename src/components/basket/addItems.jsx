const AddItems = ({submitHandler, updateHandler, addHandler}) => {

    return (
        <form onSubmit={submitHandler}>
        <input type="text" placeholder="Insert items here..." onChange={updateHandler}/>
        <button type="button" onClick={addHandler}>Add to basket</button>
        </form>
    )
};

export default AddItems;