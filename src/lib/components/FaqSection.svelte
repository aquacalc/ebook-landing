<script>
	import Button from './Button.svelte';
	import FaqItem from './FaqItem.svelte';

	const faqs = [
		{
			question: 'What is pH?',
			answer: 'The activity of the hydronium on.'
		},
		{
			question: 'What is alkalinity?',
			answer: 'The activity of the hydronium on.'
		},
		{
			question: 'What is DIC?',
			answer: 'The activity of the hydronium on.'
		},
		{
			question: 'What is Omega?',
			answer: 'The activity of the hydronium on.'
		},
		{
			question: 'What is CO2?',
			answer: 'The activity of the hydronium on.'
		}
	];

	let questionCurrentlyExpanded = $state(-1);

	const handleItemClick = (idx) =>
		(questionCurrentlyExpanded = questionCurrentlyExpanded === idx ? -1 : idx);
</script>

<section class="landing-page-section">
	<h2 class="mb-l">Frequently Asked Questions</h2>
	<div class="faq-container">
		{#each faqs as faq, idx}
			<!-- <FaqItem {faq} isExpanded={idx === questionCurrentlyExpanded} /> -->
			<FaqItem
				{faq}
				isExpanded={idx === questionCurrentlyExpanded}
				onclick={() => handleItemClick(idx)}
			/>
		{/each}
	</div>

	<div class="additional-info">
		<Button class="mt-s">Buy Now</Button>
		<p class="mt-s">Any other questions?</p>
		<a href="https://wq-viz-intl.vercel.app" target="_blank">https://wq-viz-intl.vercel.app</a>
	</div>
</section>

<style>
	.additional-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: grey;
		margin-top: 18px;
	}

	.twitter-icon {
		width: 16px;
		height: 16px;
	}

	.additional-info a {
		text-decoration: underline;
	}
</style>
