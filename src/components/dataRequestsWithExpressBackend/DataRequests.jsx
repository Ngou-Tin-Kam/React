import axios from 'axios';
import { useState, useEffect } from 'react';
import Dog from './Dog';

const DataRequests = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:7300/getAllDogs')
    .then((res) => setData(res.data))
    .catch((err) => console.error(err));
    }, []);

    return(
        <>
        {data.map(({name, breed, age}) => (
        <Dog 
        key={name + breed + age} 
        name={name}
        breed={breed} 
        age={age}
        />
        ))
        }
        </>
    )
};

export default DataRequests;