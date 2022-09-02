import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const data = [
  {
    title: "Essentials Oil 01",
    imageProduct: "https://res.cloudinary.com/juandacloud/image/upload/v1662074712/reactJs-coder/itemImage_rqy2dp.jpg",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "Essentials Oil 02",
    imageProduct: "https://res.cloudinary.com/juandacloud/image/upload/v1662074712/reactJs-coder/itemImage_rqy2dp.jpg",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "Essentials Oil 03",
    imageProduct: "https://res.cloudinary.com/juandacloud/image/upload/v1662074712/reactJs-coder/itemImage_rqy2dp.jpg",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "Essentials Oil 04",
    imageProduct: "https://res.cloudinary.com/juandacloud/image/upload/v1662074712/reactJs-coder/itemImage_rqy2dp.jpg",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "Essentials Oil 05",
    imageProduct: "https://res.cloudinary.com/juandacloud/image/upload/v1662074712/reactJs-coder/itemImage_rqy2dp.jpg",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  }
];


function App() {
  return (
    <div className="App">
      <div className='header'>
        <NavBar />
      </div>
      <div className='main'>
        <div className='album py-5'>
          <div className='container'>

            {
              data.map(item => (
                <ItemListContainer
                  imageProduct={item.imageProduct}
                  title={item.title}
                  description={item.description}
                />
              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
