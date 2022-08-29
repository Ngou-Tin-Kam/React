import { useState } from 'react';
import PropTypes from 'prop-types';

function DogForm({ submitHandler }) {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState(0);

  const createDog = async (e) => {
    await submitHandler(e, { name, breed, age });
    setName('');
    setBreed('');
    setAge(0);
  };
  return (
    <form>
      <label htmlFor="nameInput">
        Name
        <br />
        <input type="text" id="nameInput" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="breedInput">
        Breed
        <br />
        <input type="text" id="breedInput" value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>
      <label htmlFor="ageInput">
        Age
        <br />
        <input type="text" id="ageInput" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <button type="submit" onClick={createDog}>Submit</button>
    </form>
  );
}

export default DogForm;

DogForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};