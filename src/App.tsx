import  { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import GlobalStyle from '../main';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';


function App() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
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
        <Route path="/menu/:id" 
          element={<ProductDetails 
                     
                     cartItems={cartItems} 
                     clearCart={clearCart} 
                     isCartOpen={isCartOpen} 
                     setIsCartOpen={setIsCartOpen} 
                   />} 
        />
       <Route path="/cart" 
          element={<Cart 
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
