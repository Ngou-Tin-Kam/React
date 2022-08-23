import {useState} from 'react';
const Counter = () => {
    
    const [count, setCount] = useState(0);
    const [prevActions, setPrevActions] = useState([]);

    let addFive = () => {
        setCount(count + 5);
    }
    let addOne = () => {
        setCount(count + 1);
    }
    let reset = () => {
        setCount(0);
    }
    let minusOne = () => {
        setCount(count - 1);
    }
    let minusFive = () => {
        setCount(count - 5);
    }

    const saveActions = () => {
        if (prevActions.length > 5) {
            prevActions.shift(1)
        }
        setPrevActions((prev) => [...prev, count])
    };

    return (
        <>
            <h3>Counter</h3>
            <h1>{count}</h1>
        
            <button onClick={() => {addFive(); saveActions();}}>+5</button>
            <button onClick={() => {addOne(); saveActions();}}>+1</button>
            <button onClick={() => {reset(); saveActions();}}>R</button>
            <button onClick={() => {minusOne(); saveActions();}}>-1</button>
            <button onClick={() => {minusFive(); saveActions();}}>-5</button>

            <p>Last 5 actions:</p>
            <ul>
                {prevActions.map((count, index) => (
                    <li key={index}>{count}</li>
                ))}
            </ul>
        </>
  );
}

export default Counter;