import {useState} from 'react';
import Products from './Products.jsx';
import product from './product.json';

const ProductSearcher = () => {
    const [search, setSearch] = useState('');
    let filteredList = [];

    product.forEach((product) => {
        if (product.name.includes(search)) {
            filteredList.push(product);
        }
    });

    return(
        <>
            <label>Search products (case sensitive): </label>
                <input name="searchterm"
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}/>
        <br/>
        {filteredList.map(product => (<Products key={product.name} name={product.name} cost={product.cost} quantity={product.quantity}/>
        ))}
        </>
    );
    
};

export default ProductSearcher;