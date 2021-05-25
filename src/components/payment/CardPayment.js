
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';

import { paymentStatus } from '../../store/boxSlice'

import './styles.css';

const CardPayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();  

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      dispatch(paymentStatus('ERROR'));
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      dispatch(paymentStatus('SUCCESS'));
    }
  };

  return (
    <div className="card-pay">
    <form>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="button" className="btn-primary" onClick={handleSubmit} disabled={!stripe}>
        Pay Now
      </button>
    </form>
    </div>
  );
};

export default CardPayment;
