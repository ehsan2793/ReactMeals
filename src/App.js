import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meal from './components/Meals/Meal';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };
  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={showCartHandler} />}
      <Header onshowCart={showCartHandler} />
      <main>
        <Meal />
      </main>
    </React.Fragment>
  );
}

export default App;
