import './App.css';
import CartProducts from './components/cartProducts';
import Header from './components/headers';
import OrderDetails from './components/orderDetails';
import OrderIdDetails from './components/orderId';

function App() {
  return (
    <div>
      <Header/>
      <OrderIdDetails/>
      <OrderDetails/>
      <CartProducts/>
    </div>
  );
}

export default App;
