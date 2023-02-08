const stripeAPI = require('../stripe');
require('dotenv').config({ path: '../.env' });

async function createCheckoutSession(req, res) {
  const domainUrl = process.env.CLIENT_DOMAIN;
  const { line_items, customer_email } = req.body;
  if (!line_items || !customer_email) {
    return res
      .status(400)
      .json({ error: 'missing required session parameters' });
  }

  let session;

  try {
    session = await stripeAPI.checkout.sessions.create({
      payment_method_types: {
        card: {},
        us_bank_account: {},
      },
      mode: 'payment',
      line_items,
      customer_email,
      success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainUrl}/cancelled`,
      shipping_address_collection: { allowed_countries: ['US'] },
      shipping_options: [{ shipping_rate: 'shr_1MYWlUA0AImmhFD7WfAvkoBn' }],
    });
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'an error occured, couldnt create session' });
  }
}

module.exports = createCheckoutSession;
