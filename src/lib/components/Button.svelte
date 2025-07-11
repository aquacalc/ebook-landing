<script>
	import { loadStripe } from '@stripe/stripe-js';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';

	// $inspect(PUBLIC_STRIPE_KEY);

	// Destructure children and other props from component props
	let { children, ...props } = $props();

	// Click handler for the button
	const onclick = async () => {
		// Initialize Stripe with public key
		const stripe = await loadStripe(PUBLIC_STRIPE_KEY);

		// Send POST request to backend checkout endpoint
		const res = await fetch('/api/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	};
</script>

<button type="button" {...props} {onclick}>{@render children()}</button>

<style>
	button {
		background-color: purple;
		color: white;
		padding: 20px 24px;
		font-weight: normal;
		font-size: 22px;
		text-transform: uppercase;
		transition: all 500ms;
		border: 1px solid white;
		border-radius: 8px;
	}

	button:hover {
		background-color: white;
		color: black;
	}
</style>
