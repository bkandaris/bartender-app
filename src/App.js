import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
      </Routes>
    </Router>
  );
}

export default App;
