import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'phone', price: '14560', color: 'black blue' },
    { name: 'laptop', price: '52000', color: 'nevy blue' },
    { name: 'watch', price: '4360', color: 'black' },
    { name: 'camera', price: '13460', color: 'lightblue' },
    { name: 'shoe', price: '5670', color: 'dark blue' },
    { name: 't-shirt', price: '530', color: 'black' },
    { name: 'orange', price: '565', color: 'orange' },
    { name: 'apple', price: '865', color: 'lightred' },
    { name: 'banana', price: '65', color: 'orange' }
  ]
  return (
    <div className="App product-container">
      {
        products.map(product => <Product name={product.name} price={product.price} color={product.color}></Product>)
      }


      {/* <Product name='phone 📱' price='17000' color='black blue'></Product>
      <Product name='laptop 💻' price='70000' color='black'></Product>
      <Product name='watch ⌚' price='7000' color='blue'></Product>
      <Product name='camera 📷' price='10500' color='coral'></Product>
      <Product name='t-shirt 👕' price='250' color='white'></Product>
      <Product name='shoe 👟' price='80' color='orange'></Product> */}
    </div>
  );
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
export default App;
