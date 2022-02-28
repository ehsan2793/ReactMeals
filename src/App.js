import React from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meal from './components/Meals/Meal';
function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Meal />
      </main>
    </React.Fragment>
  );
}

export default App;
