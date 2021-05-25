import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, sort, addToCart, removeFromCart, addQuantity, subQuantity, emptyCart } from '../../store/boxSlice'
import { Elements } from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import CardPayment from './CardPayment'

const PUBLIC_KEY = "pk_test_51IqzWcSDIz5xW9l7w2srw2xfPairSPsNrNqWFAIA6ThAKifLXZvZJjbi2CfJXcTnrSkS14VmTlNusnwS8Dlo26e800erVbrusq";

const ELEMENTS_OPTIONS = {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
      }
    ]
};

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {

    const boxData = useSelector((boxState) => boxState.boxName.boxes);
    const amount = boxData.map(m => m.howMany * m.price).reduce((a, b) => a + b, 0);

    return (
        <>
         <div className="container whole-container">
             
            <h1>You need to pay: ${amount}</h1>
            <Elements stripe={stripeTestPromise} options={ELEMENTS_OPTIONS}>
                <CardPayment />
            </Elements>
         </div>
        </>
    )
}

export default StripeContainer
