import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
    const { cartItems } = req.body;

    try {

        if (!cartItems || cartItems.length === 0) {
            return res.status(400).json({ error: 'No items provided' });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: cartItems.map(item => ({
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.title.shortTitle || item.title.longTitle,
                    },
                    unit_amount: item.price.cost * 100,
                },
                quantity: item.quantity,
            })),
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel'
        });

        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        console.error('Error creating checkout session', error);
        res.status(500).json({ error: 'Unable to create checkout session' });
    }
}