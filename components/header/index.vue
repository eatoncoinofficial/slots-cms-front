<template>
	<header class="header">
		<div class="container header_container">
			<div class="header_left">
				<Logo />
			</div>
			<div class="header_center">
				<Search />
				<div class="wrapper_menu">
					<Menu />
				</div>
			</div>
			<div class="header_right">
				<LangSelector />
			</div>
		</div>
	</header>
</template>
<script>
import Logo from './app-logo'
import Menu from './app-menu'
import Search from './app-search'
import LangSelector from './lang_selector'
export default {
	name: 'header',
	components: { Logo, Menu, Search, LangSelector },
	data() {
		return {}
	}
}
</script>
<style scoped>
.header {
	padding-top: 20px;
	position: absolute;
	top: 0px;
	left: 0px;
	height: 116px;
	width: 100%;
	background: transparent;
}
.header_left,
.header_right {
	width: 160px;
}
.header_right {
	display: flex;
	justify-content: flex-end;
}
.header_container {
	display: flex;
	justify-content: space-between;
}
.header_center {
	flex-grow: 1;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.wrapper_menu {
	margin-top: var(--s);
}
@media (max-width: 767px) {
	.header {
		display: none;
	}
}
</style>
