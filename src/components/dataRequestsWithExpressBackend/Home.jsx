import axios from 'axios';
import { useEffect, useState } from 'react';
import DogContainer from './DogContainer';
import DogForm from './DogForm';
import Consts from './data/consts.json';

function Home() {
  const [dogs, setDogs] = useState([]);

  const { API_URL } = Consts;

  useEffect(() => {
    async function getDogs() {
      const { data } = await axios.get(`${API_URL}/getAllDogs`);
      setDogs(data.map(({ __v, ...dog }) => dog));
    }
    getDogs();
  }, []);

  const submitHandler = async (e, dog) => {
    e.preventDefault();
    const { data: { __v, ...newDog } } = await axios.post(`${API_URL}/createDog`, dog);
    setDogs([...dogs, newDog]);
  };

  const deleteHandler = async (id) => {
    await axios.delete(`${API_URL}/removeDog/${id}`);
    setDogs((oldDogs) => oldDogs.filter(({ _id }) => _id !== id));
  };
  return (
    <main style={{ display: 'flex', justifyContent: 'space-around' }}>
      <section>
        <DogForm submitHandler={submitHandler} />
      </section>
      <section>
        <DogContainer dogs={dogs} deleteHandler={deleteHandler} />
      </section>
    </main>
  );
}

export default Home;