import PropTypes from 'prop-types';

function Dog({
  name, breed, age, deleteHandler, editHandler,
}) {
    return(
        <div>
            <p>{`Name: ${name}`}</p>
            <p>{`Breed: ${breed}`}</p>
            <p>{`Age: ${age}`}</p>
            <button type="button" onClick={editHandler}>Edit</button>
            <button type="button" onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default Dog;

Dog.propTypes = {
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    editHandler: PropTypes.func.isRequired,
    deleteHandler: PropTypes.func.isRequired,
};