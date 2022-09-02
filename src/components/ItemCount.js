import '../stylesSheets/ItemCount.css';
import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    }, []);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div className='controls d-flex justify-content-between align-items-center'>
            <div className="btn-group">
                <button type="button" className="btn btn-success" onClick={decrement}>-</button>
                <p className="card-text fs-6 text-count">{count}</p>
                <button type="button" className="btn btn-success" onClick={increment}>+</button>
            </div>
            <a className="btn btn-outline-primary" onClick={() => onAdd(count)}>Add to cart</a>
        </div>
    )
};

export default ItemCount;