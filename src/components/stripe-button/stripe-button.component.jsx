import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J7uiuK6PixmHqUR0W8qxxVAKnoNuHVa0cq9tfexD5LsN3ZgbS2hmmtSwx5aKOF1EyktVtdbV4bNCGkesRsN073C00gyOMijZ3';



 const onToken = token => {
    console.log(token);
    alert('Payment Successful');
};


return (
    <StripeCheckout 
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image=''
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
    );
};
  

export default StripeCheckoutButton;
