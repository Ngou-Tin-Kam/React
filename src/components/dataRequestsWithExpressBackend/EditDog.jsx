import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Consts from './data/consts.json';

function EditDog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [breed, setBreed] = useState(0);
  const [age, setAge] = useState(0);

  useEffect(() => {
    async function getDog() {
      const { data: dog } = await axios.get(`${Consts.API_URL}/getDog/${id}`);
      setName(dog.name);
      setBreed(dog.breed);
      setAge(dog.age);
    }
    getDog();
  }, [id]);

  const editHandler = async (e) => {
    e.preventDefault();
    await axios.patch(`${Consts.API_URL}/updateDog/${id}?name=${name}&breed=${breed}&age=${age}`);
    navigate('/');
  };

  return (
    <form>
      <label htmlFor="nameInput">
        Name
        <br />
        <input type="text" id="nameInput" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="costInput">
        Cost
        <br />
        <input type="text" id="costInput" value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>
      <label htmlFor="amountInput">
        Amount
        <br />
        <input type="text" id="amountInput" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <button type="submit" onClick={editHandler}>Submit</button>
    </form>
  );
}

export default EditDog;