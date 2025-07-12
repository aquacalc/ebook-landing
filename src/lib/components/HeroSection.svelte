<script>
	import Button from './Button.svelte';

	let { children } = $props();

	const handleClick = () => alert('Yadda!');
</script>

<!-- Serve from static or as alias? sequence... -->
<!-- https://stackoverflow.com/questions/71789244/where-to-put-images-with-sveltekit -->
<section class="hero">
	<div class="hero-showcase bold text-center">
		<h1 class="purple">MOVE TO</h1>
		<h1 class="purple mb-xs">SPAIN</h1>
		<h4 class="semi-bold italic">There's no need to make the same mistake that I made!</h4>
		<img src="/book_cover.png" alt="" class="book-cover" />
		<img src="/phone_cover.png" alt="" class="phone-cover" />
	</div>

	<!-- Right Side -->
	<div class="hero-text white text-center">
		{#if children}
			{@render children()}
		{:else}
			<h2>This eBook will</h2>
			<h2>Save you money,</h2>
			<h2 class="mb-m">time, and nerves!</h2>
			<p class="light-grey mb-m">
				I moved to Spain seven years ago. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Enim doloribus modi dolor beatae recusandae assumenda. Cum, magni. At ullam error
				dignissimos ad? Iste quos nostrum tenetur commodi eos aperiam accusantium.
			</p>
			<Button onclick={handleClick}>Buy the eBook for $10</Button>
		{/if}
	</div>
</section>

<style>
	.hero {
		display: flex;
		height: 100vh;
		overflow-y: hidden;
	}

	.hero-showcase {
		position: relative;
		width: 50%;
		padding: 60px 16px 0 16px;
		background: linear-gradient(135deg, #e2cbff, #e2cbff 25%, #deeaff 50%, #ece5ff 75%, #927bce);
	}

	.hero-text {
		/* position: relative; */
		padding: 60px 5%;
		width: 50%;
		background-color: purple;
	}

	.book-cover {
		position: absolute;
		right: 2%;
		bottom: 0;
		width: 65%;
		transform: translateY(30%);
	}

	.phone-cover {
		position: absolute;
		right: 52%;
		bottom: 0;
		width: 35%;
		transform: translateY(25%);
	}
</style>
