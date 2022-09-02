import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import { data } from './utils/data';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer items={data}/>
    </div>
  );
}

export default App;
