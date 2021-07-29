import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import ListProducts from '.Components/listProducts'
import Product from '.Components/product'


function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <Provider store={store}>
      <ListProducts></ListProducts>
      <Product></Product>
      </Provider>
    </div>
  );
}

export default App;
