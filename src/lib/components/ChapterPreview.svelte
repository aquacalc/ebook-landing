<script>
	const chapters = [
		{
			number: 1,
			title: 'Intro',
			strapline: 'The Life-blood of all aquatic systems',
			excerpt: 'Water quality is water chemistry...'
		},
		{
			number: 2,
			title: 'pH',
			strapline: "The 'Master Variable'?",
			excerpt: "The p's and q's of pH"
		},
		{
			number: 3,
			title: 'Alkalinity',
			strapline: 'What the H is Alkalinity?!',
			excerpt: 'Al Kaline'
		}
	];

	let selectedChapterNumber = $state(1);

	// let { selectedStrapline, selectedExcerpt } = $derived(
	let selectedChapter = $derived(
		chapters.find((ch) => ch.number === selectedChapterNumber)
	);

	const selectChapter = (chapterNumber) => (selectedChapterNumber = chapterNumber);
</script>

<section class="landing-page-section default-margin">
	<h2 class="mb-s">What you're getting</h2>
	<div class="chapter-container">
		<ul>
			{#each chapters as { title, number }}
				<li>
					<button
						class="chapter-title"
						class:selected-chapter-title={selectedChapterNumber === number}
						onclick={() => selectChapter(number)}
						aria-controls={`chapter-info-${number}`}
						aria-expanded={selectedChapterNumber === number}
					>
						<h3>Chapter {number}: {title}</h3>
					</button>
				</li>
			{/each}
		</ul>

		<!-- Right Side -->
		<div class="chapter-info">
			<h3 class="chapter-strapline mb-s italic">{selectedChapter.strapline}</h3>
			<p>
				<!-- {selectedChapter.excerpt} -->
				{selectedChapterNumber}
         {chapters[selectedChapterNumber - 1].excerpt}
			</p>
		</div>
	</div>
</section>

<style>

	.chapter-container {
		display: flex;
		justify-content: space-between;
		/* display: grid;
    grid-template-columns: 1fr 2fr; */
	}

	.chapter-container ul {
		width: 40%;
	}

	.chapter-info {
		background-color: lightyellow;
		width: 55%;
	}

	.chapter-title {
		display: block;
		border-bottom: 1px solid lightgray;
		width: 100%;
		padding: 12px;
		text-align: left;
	}

	.selected-chapter-title {
		background-color: purple;
		border: none;
		border-radius: 8px;
		color: white;
		box-shadow:
			0 4px 6px rgba(0, 0, 0, 0.1),
			0 1px 4px rgba(0, 0, 0, 0.08);
	}
</style>
