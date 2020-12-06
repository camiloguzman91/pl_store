import React from 'react';
import '../styles/components/Payment.css';

const Payment = () => {
return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order summary: </h3>
        <div className="Payment-button">
          Paypal payment button 
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;