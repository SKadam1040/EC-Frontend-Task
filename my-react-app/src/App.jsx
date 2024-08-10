import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './Pages/Register';
import Login from './Pages/Login';
import ProductListing from './Pages/ProductListing';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductListing />} />
      </Routes>
    </Router>
  );
}

export default App;
