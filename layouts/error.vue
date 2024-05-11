<template>
	<div>
		<section class="error_section">
			<div class="container">
				<img src="/img/404.png" class="error_img" />
				<div class="error_desc" v-html="t('TEXT_ERROR_PAGE')"></div>
				<div class="home_link_wrapper">
					<NuxtLink to="/" class="home_link">{{ t('HOME_PAGE') }}</NuxtLink>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import components from '~/mixins/components'
export default {
	props: ['error'],
	mixins: [components],
	layout: 'error'
}
</script>
<style scoped>
.error_section {
	background: url(/img/hero_img.webp) top var(--colombo);
	text-align: center;
	padding-top: 200px;
	padding-bottom: 50px;
	flex-wrap: wrap;
	display: flex;
	justify-content: center;
}
.home_link_wrapper {
	text-decoration: none;
	width: 100%;
}
.home_link {
	margin-top: 50px;
	display: inline-block;
	width: 280px;
	height: 45px;
	background: var(--calgary);
	border-radius: 12px;
	color: var(--cochin);
	font-weight: bold;
	font-size: 20px;
	text-decoration: none;
	line-height: 45px;
}
.error_desc {
	width: 100%;
	margin-top: 30px;
	margin-bottom: 30px;
	color: var(--cairo);
	font-size: 24px;
}
</style>
