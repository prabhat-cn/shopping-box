import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51IqzWcSDIz5xW9l7w2srw2xfPairSPsNrNqWFAIA6ThAKifLXZvZJjbi2CfJXcTnrSkS14VmTlNusnwS8Dlo26e800erVbrusq";


const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
           <PaymentForm />
        </Elements>
    )
}

export default StripeContainer
