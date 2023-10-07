<template>
	<article class="item">
		<div class="wrapper">
			<div class="rating">9</div>
			<a href="#">
				<AImg :attributes="imgSettings.DC" src="/img/gamePrevyu.png" />
			</a>
		</div>
	</article>
</template>
<script>
import AImg from '~/components/ui/atoms/img/'
export default {
	name: 'casino_slider_card',
	components: { AImg },
	data: () => {
		return {
			imgSettings: {
				DC: { width: '100px', height: '100px', class: 'object_fit_cover' },
				TABLET: {},
				MOB: {}
			}
		}
	}
}
</script>
<style scoped>
.item {
	width: 105px;
	height: 105px;
	padding: 5px;
}
.wrapper {
	position: relative;
	border: 1px solid #886dff;
	border-radius: 14px;
}
.item img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.rating {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 2;
}
</style>
