import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './components/data';
import { useState } from 'react';
import Clock from './components/Clock';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './components/Aboutus';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x));
    }
    else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else{

      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x));
    }
  };


  return (

    <BrowserRouter>
      <Header countCartItems={cartItems.length}></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Main onAdd={onAdd} products={products}></Main>
          }
        ></Route>
        <Route 
          path="/basket" 
          element={
          <Basket onAdd={onAdd} onRemove = {onRemove} cartItems={cartItems}></Basket>}
          ></Route>
          <Route
          path="/onama"
          element={
            <Aboutus></Aboutus>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
