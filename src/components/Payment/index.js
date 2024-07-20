import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const { state } = location;
    const { selectedValue } = state || {};
    const navigate = useNavigate();

    return (
        <div>
            <h1>Your payment amount is {selectedValue ? `Rs.${selectedValue}` : 'not available'}</h1>
            <button onClick={() => navigate('/payment')}>Pay Now</button>
        </div>
    );
};

export default Payment;