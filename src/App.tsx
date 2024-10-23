
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import { useState } from 'react';
import { Container } from './components/Container';
import ProductDetails from './components/ProductDetails';

function App() {
  const [cartItems, setCartItems] = useState<any[]>([]);


  const addToCart = (product: any) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Router>
      <Container>
      <Header cartItemCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
