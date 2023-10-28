<template>
	<div class="search">
		<input placeholder="Пошук" class="input" />
		<button type="button" class="btn-default search__cta">
			<AImg :attributes="imgSettings.DC" src="/img/search.png" />
		</button>
	</div>
</template>
<script>
import DAL_Builder from '~/DAL/builder'
import AImg from '~/components/ui/atoms/img'
export default {
	name: 'app-search',
	components: { AImg },
	data() {
		return {
			posts: [],
			searchWord: '',
			imgSettings: {
				DC: { width: '20px', height: '20px' },
				TABLET: {},
				MOB: {}
			}
		}
	},
	computed: {
		showSearch() {
			return this.$store.getters['common/getShowSearch']
		}
	},
	methods: {
		async search() {
			if (this.searchWord === '') return
			const request = new DAL_Builder()
			const response = await request
				.url('search')
				.setSearch(true)
				.searchWold(this.searchWord)
				.get()
			if (response.data.confirm !== 'error') {
				this.posts = response.data.body.posts
			}
		}
	}
}
</script>

<style scoped lang="scss">
.search {
	max-width: 100%;
	width: 624px;
	display: flex;
	background: rgba(16, 13, 36, 0.28);
	border-radius: 14px;
	padding-right: 15px;
}
.input {
	flex-grow: 1;
	height: 40px;
	background: transparent;
	color: var(--cairo);
	border: none;
	padding-left: 15px;
}
.input::placeholder {
	color: var(--cairo);
}
.input:active,
.input:hover,
.input:focus {
	outline: 0;
	outline-offset: 0;
}
%btn-general {
	font-family: var(--base-font-family);
	display: inline-flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
	background-color: transparent;
	border: 0;
	padding: 0;
}

.btn-default {
	@extend %btn-general;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.1;
	text-align: center;
	position: relative;
	padding: 0;
}
</style>
