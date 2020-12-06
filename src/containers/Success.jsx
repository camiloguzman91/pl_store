import React from 'react';
import '../styles/components/Success.css'

const Success = () => {
return (
    <div className="Success">
      <div className="Success-content">
        <h2>Camilo thanks for your purchase</h2>
        <span>Your order will arrive in 3 days at your address</span>
        <div className="Success-map">
          Google maps
        </div>
      </div>
    </div>
  );
}

export default Success;