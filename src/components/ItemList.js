import '../stylesSheets/ItemList.css';
import ItemCount from './ItemCount';

const ItemList = (props) => {

    const onAdd = (quantity) => {
        alert("You have selected " + quantity + " items.");
    }

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
                <div className="card shadow-sm">
                    <img src={props.imageProduct} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className='card-text fs-3'>{props.title}</p>
                        <p className="card-text">{props.description}</p>
                        <ItemCount stock={7} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemList;