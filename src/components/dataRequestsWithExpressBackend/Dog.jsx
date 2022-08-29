import PropTypes from 'prop-types';

const Dog = ({name, breed, age}) => {

    return(
        <div>
            <p>{`Name: ${name}`}</p>
            <p>{`Breed: ${breed}`}</p>
            <p>{`Age: ${age}`}</p>
        </div>
    );
}

export default Dog;

Dog.propTypes = {
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}