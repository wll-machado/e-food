
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import { useState } from 'react';
import { Container } from './components/Container';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import GlobalStyle from '../main'

function App() {
  const [cartItems, setCartItems] = useState<any[]>([]);


  const addToCart = (product: any) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Container>
      <GlobalStyle />
      <Header cartItemCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} clearCart={clearCart}/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
      </Container>
    </Router>
  );
}

export default App;
