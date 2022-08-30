import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <div className='Body'>
        <ItemListContainer 
        greeting='Product'/>
      </div>
    </div>
  );
}

export default App;
