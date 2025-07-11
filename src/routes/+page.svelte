<script>
	import { HeroSection, ChapterPreview, AuthorSection, FaqSection, Sidebar } from '$lib';

	const menuItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Chapters', href: '#chapters' },
		{ label: 'Author', href: '#author' },
		{ label: 'FAQ', href: '#faq' }
	];
</script>

<Sidebar items={menuItems} />

<HeroSection />

<div id="chapters">
	<ChapterPreview />
</div>

<div id="author">
	<AuthorSection />
</div>

<div id="faq"></div>
<FaqSection />
