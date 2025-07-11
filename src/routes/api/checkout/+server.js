import Stripe from 'stripe';
import { json } from '@sveltejs/kit';
import { PRICE_ID, STRIPE_API_KEY } from '$env/static/private';
import { PUBLIC_FRONTEND_URL } from '$env/static/public';

// Initialize Stripe with secret API key
const stripe = new Stripe(STRIPE_API_KEY);

// Handle POST request to create a checkout session
export async function POST() {
	try {
		// Create a new Stripe Checkout session
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'], // Accept card payments
			line_items: [
				{
					price: PRICE_ID, // Use predefined price ID
					quantity: 1 // Single item purchase
				}
			],
			mode: 'payment', // One-time payment mode
			success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`, // Redirect on success
			cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/failure` // Redirect on cancel
		});

		// Log the session ID for debugging purposes
		// console.log(session.id)
		return json({ sessionId: session.id });
	} catch (error) {
		return json({ error }, { status: 500 });
	}
}
