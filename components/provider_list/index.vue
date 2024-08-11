<template>
	<div class="root" id="provider_list">
		<div class="wrapper">
			<Slider :settings="sliderSettings">
				<div class="slider_item">
					<AText :attributes="btnSettings" data-active="true">{{ t('ALL') }}</AText>
				</div>
				<div class="slider_item" v-for="(item, index) in value" :key="index">
					<ALink
					:href="item.permalink"
					:attributes="textSettings"
					:data-active="item.active"
					:title="`Goes to ${item.title} page`"
				>
					<AImg :attributes="{ ...imgSettings, alt: `${item.title} Logo` }" :src="item.icon" /> {{ item.title }}
				</ALink>
				</div>
			</Slider>
		</div>
	</div>
</template>

<script>
import components from '~/mixins/components'
import Slider from '~/components/slider'
export default {
	name: 'providers_filter',
	mixins: [components],
	props: {
		value: {
			type: Array,
			default() {
				return []
			}
		}
	},
	comments: {Slider},
	data() {
		return {
			textSettings: {
				class: 'item',
				color: 'cairo',
				size: 'small',
				weight: 'regular',
				decoration: 'none'
			},
			imgSettings: {
				width: '26px',
				height: '26px',
				class: 'logo'
			},
			btnSettings: {
				class: 'item_btn',
				color: 'cairo',
				size: 'small',
				weight: 'regular',
				decoration: 'none'
			},
			sliderSettings: {
				initialSlide: 0,
				variableWidth: true,
				swipeToSlide: true,
				infinite: false
			},
		}
	}
}
</script>
<style>
#provider_list .slick-list {
	overflow: visible;
}
</style>
<style scoped>
.item {
	display: flex!important;
	align-items: center;
	padding: 5px 15px;
	border-radius: var(--s);
	background: rgba(255, 255, 255, 0.1);
	white-space: nowrap;
	font-size: 10px;
	margin-left: 5px;
	margin-right: 5px;
}
.logo {
	display: block;
	margin-right: 5px;
}
.item_btn {
	width: 80px;
	height: 36px;
	display: flex!important;
	align-items: center;
	justify-content: center;
	border-radius: var(--s);
	min-width: 80px;
	margin-right: 5px;
}
[data-active='true'] {
	background: rgba(255, 255, 255, 0.27);
}
@media (max-width: 767px) {
	.wrapper a,
	.wrapper span {
		flex-shrink: 0;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.wrapper {
		width: auto;
	}
	.wrapper a,
	.wrapper span {
		flex-shrink: 0;
	}
}
</style>
