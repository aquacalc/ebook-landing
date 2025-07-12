// support Stripe webhook to send purchase confirmation e via SendGrid
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const requestBody = await request.json();

	console.log(requestBody);

	return json({ success: true });
}