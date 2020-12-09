import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Appcontext from '../context/AppContext';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = useContext(Appcontext);
  const { cart } = state;

  const handleRemove = product => () => {
    removeFromCart(product);
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <>
      <Helmet>
        <title>Lista de pedidos - Platzi conf Merch</title>
      </Helmet>
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item) => ( 
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total: $${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Keep ordering</button>
          </Link>
        </div>
      )}
    </div>
    </>
  );
}

export default Checkout;