const stripeAPI = require('stripe')(process.env.STRIPE__SECRET__KEY);
module.exports = stripeAPI;
