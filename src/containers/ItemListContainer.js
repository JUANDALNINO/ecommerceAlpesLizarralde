import '../stylesSheets/ItemListContainer.css';
import ItemList from '../components/ItemList';
import { useEffect, useState } from 'react';
import promise from '../utils/promise';
import data from './utils/data';

function ItemListContainer(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        promise(data)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='main'>
            <div className='album py-5'>
                <div className='container'>
                    {
                        props.items.map(item => (
                            <ItemList
                                key={item.id}
                                imageProduct={item.imageProduct}
                                title={item.title}
                                description={item.description}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;