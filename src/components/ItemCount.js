import '../stylesSheets/ItemCount.css';
import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if(count < stock) {
            setCount(count+1)
        }
    }

    const decrement = () => {
        if(count > initial) {
            setCount(count-1)
        }
    }

    return (
        <div>
            <div className='controls'>
                <a className="btn btn-success" onClick={decrement}>-</a>
                <p className="card-text fs-4">{count}</p>
                <a className="btn btn-success" onClick={increment}>+</a>
            </div>
            <a className="btn btn-outline-primary" onClick={() => onAdd(count)}>Add to cart</a>
        </div>
    )
};

export default ItemCount;