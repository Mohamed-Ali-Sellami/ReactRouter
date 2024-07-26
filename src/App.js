import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import AddMovie from './AddMovie';
import Details from './Details';

function App() {
  return (
    <div className="App">
      <Routes>

<Route path="/" element={<Home />} />
<Route path="/add" element={<AddMovie/>} />
<Route path="/details"element={<Details/>} />


      </Routes>
    </div>
  );
}

export default App;
