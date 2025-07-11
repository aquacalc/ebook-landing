<script>
	// let open = false;
	// export let items = [];
	// let items = $props([]);

	let { items = [] } = $props();

	let open = $state(false);

	const sidebarClass = $derived(open ? 'sidebar open' : 'sidebar');

	const closeSidebar = () => (open = false);

	// $: sidebarClass = open ? 'sidebar open' : 'sidebar';
	// let sidebarClass = open ? 'sidebar open' : 'sidebar'

	// This assumes 'open' is reactive state (e.g., let open = $state(false);)
</script>

{#if open}
	<button type="button" class="overlay" aria-label="Close sidebar" onclick={closeSidebar}></button>
{:else}
<!-- Hide 'open' btn when "opacity < 1 sidebar" is open -->
	<button class="menu-btn" onclick={() => (open = true)}>☰</button>
{/if}

<div class={sidebarClass}>
	<button id="close-btn" onclick={closeSidebar}>X</button>
	<ul>
		{#each items as item}
			<li><a href={item.href}>{item.label}</a></li>
		{/each}
	</ul>
</div>

<style>
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 250px;
		height: 100%;
		background: #fff;
		box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
		transform: translateX(-100%);
		transition: transform 0.5s ease-out;
		z-index: 1000;
		opacity: 0.85;
	}
	.sidebar.open {
		transform: translateX(0);
		text-align: right;
	}
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.3);
		z-index: 999;
	}
	.menu-btn {
		position: fixed;
		top: 20px;
		left: 20px;
		z-index: 1;
		font-size: 3.5em;
		/* z-index: 1100; */
	}

	#close-btn {
		color: red;
		padding-right: 20px;
		padding-top: 10px;
		font-size: 1.2em;
	}
	ul {
		list-style: none;
		padding: 1rem;
	}
	li {
		margin: 1rem 0;
	}
</style>
