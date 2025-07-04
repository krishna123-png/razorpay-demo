const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: 'rzp_test_GdEOcJEYrxRG1I',       // Replace with your Test Key ID
  key_secret: 'jbT3Hg8Lpp5vqpwe69GBlMRW',      // Replace with your Test Key Secret
});

app.post('/create-order', async (req, res) => {
  try {
    const options = {
      amount: 50000, // ₹500 in paise
      currency: 'INR',
      receipt: 'receipt#1',
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send('Error creating order');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
