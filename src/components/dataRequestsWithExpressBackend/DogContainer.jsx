import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Dog from './Dog';

function DogContainer({ dogs, deleteHandler }) {
  const navigate = useNavigate();
  return (
    <>
      {dogs.map(({
        _id, name, breed, age,
      }) => (
        <Dog
          key={_id}
          name={name}
          breed={breed}
          age={age}
          deleteHandler={() => deleteHandler(_id)}
          editHandler={() => navigate(`/dog/${_id}`)}
        />
      ))}
    </>
  );
}

export default DogContainer;

DogContainer.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.exact({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  })).isRequired,
  deleteHandler: PropTypes.func.isRequired,
};