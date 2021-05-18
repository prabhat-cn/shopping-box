import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    console.log(event)
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(!error){
        console.log(paymentMethod)
    }
  };

  return (
    <form style={{ maxWidth: "400px", margin: "0 auto"}} onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_51IqzWcSDIz5xW9l7w2srw2xfPairSPsNrNqWFAIA6ThAKifLXZvZJjbi2CfJXcTnrSkS14VmTlNusnwS8Dlo26e800erVbrusq');

const PaymentForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default PaymentForm;
