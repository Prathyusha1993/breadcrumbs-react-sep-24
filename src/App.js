import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductsDetails from './components/ProductsDetails';
import ProductsListing from './components/ProductsListing';
import Breadcrumbs from './components/Breadcrumbs';

function App() {

  return (
    <div className="App">
      <h1>Breadcrumbs using React</h1>
      <BrowserRouter>
      <Breadcrumbs  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductsDetails />} />
        <Route path='/products/:id' element={<ProductsListing />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
