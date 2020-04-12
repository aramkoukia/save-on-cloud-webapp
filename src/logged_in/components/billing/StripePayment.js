import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_BkVbsTYE7ruKWHXKEllxSzBa00Qv5cZnJU');

function StripePayment() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

StripePayment.propTypes = {
};

export default StripePayment;
