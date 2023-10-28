<template>
	<section class="cms">
		<div class="tabs">
			<button class="tab_item" data-active="true">Обзор</button>
			<button class="tab_item" data-active="false">Бонуси</button>
			<button class="tab_item" data-active="false">відгуки</button>
			<button class="tab_item" data-active="false">Ігри</button>
		</div>
		<article class="container tab_text_container">
			<div class="cms">
				<h1>What is Lorem Ipsum?</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, <a href="/">when an unknown printer took</a> a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<p>
					It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
					Ipsum.
				</p>
				<h2>What is Lorem Ipsum?</h2>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, <a href="/">when an unknown printer took</a> a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<h3>What is Lorem Ipsum?</h3>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, <a href="/">when an unknown printer took</a> a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<h4>What is Lorem Ipsum?</h4>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, <a href="/">when an unknown printer took</a> a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<h5>What is Lorem Ipsum?</h5>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, <a href="/">when an unknown printer took</a> a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<h6>What is Lorem Ipsum?</h6>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, <a href="/">when an unknown printer took</a> a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<ul>
					<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
					<li>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, <a href="/">when an unknown printer took</a> a galley
						of type and scrambled it to make a type specimen book.
					</li>
				</ul>
				<ol>
					<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
					<li>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, <a href="/">when an unknown printer took</a> a galley
						of type and scrambled it to make a type specimen book.
					</li>
				</ol>
			</div>
		</article>
	</section>
</template>

<script>
import translateMixin from '~/mixins/translate'
export default {
	name: 'tab_content',
	data() {
		return {}
	},
	mixins: [translateMixin]
}
</script>
<style scoped>
.tabs {
	display: flex;
}
.tab_item {
	width: 197px;
	height: 62px;
	background: rgba(35, 32, 54, 1);
	cursor: pointer;
	border: none;
	opacity: 0.6;
	color: var(--cairo);
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 700;
}
.tab_item:last-child {
	border-top-right-radius: 12px;
}
.tab_item:first-child {
	border-top-left-radius: 12px;
}
[data-active='true'] {
	background: rgba(35, 32, 54, 1);
	opacity: 1;
}
.tab_text_container {
	border-radius: 0px 12px 12px 12px;
	padding: 24px 20px 42px 20px;
	background: rgba(35, 32, 54, 1);
}
</style>
