import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App product-container">
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrese = () => {
    setCount(count + 1);
  };
  const handleDecrese = () => {
    setCount(count - 1);
  };
  const clear = () => {
    setCount(count - count);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrese}>Increase</button>
      <button onClick={handleDecrese}>Decrease</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    color: 'white'
  }
  return (
    <div style={productStyle} className='product'>
      <h2>Name: {props.name}</h2>
      <h4>color: {props.color}</h4>
      <h5>Price: {props.price}</h5>
    </div>
  );
}

// const products = [
//   { name: 'phone', price: '14560', color: 'black blue' },
//   { nme: 'laptop', price: '52000', color: 'nevy blue' },
//   { name: 'watch', price: '4360', color: 'black' },
//   { name: 'camera', price: '13460', color: 'lightblue' },
//   { name: 'shoe', price: '5670', color: 'dark blue' },
//   { name: 't-shirt', price: '530', color: 'black' },
//   { name: 'orange', price: '565', color: 'orange' },
//   { name: 'apple', price: '865', color: 'lightred' },
//   { name: 'banana', price: '565', color: 'orange' }
// ]

// {
//   products.map(product => <Product name={product.name} price={product.price} color={product.color}></Product>)
// }


{/* <Product name='phone 📱' price='17000' color='black blue'></Product>
<Product name='laptop 💻' price='70000' color='black'></Product>
<Product name='watch ⌚' price='7000' color='blue'></Product>
<Product name='camera 📷' price='10500' color='coral'></Product>
<Product name='t-shirt 👕' price='250' color='white'></Product>
<Product name='shoe 👟' price='80' color='orange'></Product> */}


export default App;
