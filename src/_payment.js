/**
 * https://github.com/stripe/react-stripe-js
 * npm install @stripe/react-stripe-js @stripe/stripe-js
 * https://github.com/stripe/react-stripe-js/blob/master/examples/hooks/0-Card-Minimal.js
 * stripe promise add
 * https://dashboard.stripe.com/test/apikeys
 * https://stripe.com/docs/testing?testing-method=card-numbers#visa
 * https://stripe.com/docs/payments
 * https://stripe.com/docs/payments/quickstart?client=react&lang=node
 * server site:npm install --save stripe
 * incompeleted or success:https://dashboard.stripe.com/test/payments
 * 
 * */ 


/**
 * 1. install stripe and react stripe js
 * 2. create a checkout form with card element (card element contains: card number, expiration date, cvs, zip code)
 * 3. create account on Stripe and get the publishable key pk
 * 4. get card information
 * 5. create a payment method
 * 6. use test card to test payment
 * 7. on the server side: install stripe:
 * npm install --save stripe
 * 8. create a payment intent api with payment method types: ['card]
 * make sure you provide amount in cents (multiply price with 100)
 * 9. call payment intent api to get client secret and store it in a state
 * 10. use confirmCardPayment api with client secret card info
 * 11. display confirm card error 
 * 12. display confirm card success
 * 13. do things after payment --->
*/