<script>
	let { children, ...props } = $props();
</script>

<button type="button" {...props}>{@render children()}</button>

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
