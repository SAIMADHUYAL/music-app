import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Component/header';
import Products from './Component/products';
import ProductList from './Component/productlisting';

const App = () => {
  
  return(

    <div>
      <Header/>
      <Products/>
      <ProductList/>
    </div>
  )
}

ReactDOM.render(<App/> , document.getElementById('root'))
