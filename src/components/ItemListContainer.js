import { useState } from 'react';
import '../stylesSheets/ItemListContainer.css';
import ItemCount from './ItemCount';

function ItemListContainer(props) {

    const onAdd = (quantity) => {
        alert("You have selected " + quantity + " items.");
    }    

    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.greeting}</h5>

                <ItemCount stock={7} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    );
}

export default ItemListContainer;