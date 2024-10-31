import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import GlobalStyle from '../main';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
// import ProductList from './components/ProductList';

function App() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: any) => {
    setCartItems((prevItems) => [...prevItems, product]);
   
  };

  const closeCart = () => {
    setIsCartOpen(false);
    console.log('Carrinho fechado');
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<><Home /><Menu /></>} />
        {/* <Route path="/productlist" element={<ProductList cartItems={cartItems} addToCart={addToCart} clearCart={clearCart} />} /> */}
        <Route path="/menu/:id" 
          element={<ProductDetails 
                     addToCart={addToCart} 
                     cartItems={cartItems} 
                     clearCart={clearCart} 
                     isCartOpen={isCartOpen} 
                     setIsCartOpen={setIsCartOpen} 
                   />} 
        />
       <Route path="/cart" 
          element={<Cart 
                     cartItems={cartItems} 
                     clearCart={clearCart} 
                     isClose={closeCart} 
                     isOpen={isCartOpen} 
                   />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
