<template>
	<article class="item">
		<div class="wrapper">
			<div class="left">
				<div class="img_wrapper">
					<ALink :href="link">
						<AImg :attributes="imgSettings.DC" :src="src" />
					</ALink>
				</div>
			</div>
			<div class="right">
				<div class="m_t_s">
					<ALink :attributes="titleSettings.DC" :href="link">{{ title }}</ALink>
				</div>
				<div>
					<AText :attributes="descTextSettings.DC">{{ desc }}</AText>
				</div>
			</div>
		</div>
	</article>
</template>
<script>
import AImg from '~/components/ui/atoms/img/'
import AText from '~/components/ui/atoms/text'
import ALink from '~/components/ui/atoms/links'
export default {
	name: 'news_slider_card',
	components: { AImg, AText, ALink },
	data: () => {
		return {
			imgSettings: {
				DC: { width: '44px', height: '44px', class: 'object_fit_cover border_radius_s' },
				TABLET: {},
				MOB: {}
			},
			titleSettings: {
				DC: { color: 'cairo', size: 'small', weight: 'bold', decoration: 'none', class: 'title' },
				TABLET: {},
				MOB: {}
			},
			descTextSettings: {
				DC: { color: 'cairo', size: 'small', weight: 'regular', class: 'desc' },
				TABLET: {},
				MOB: {}
			}
		}
	},
	props: {
		link: {
			type: String,
			default() {
				return '/game'
			}
		},
		title: {
			type: String,
			default() {
				return ''
			}
		},
		desc: {
			type: String,
			default() {
				return ''
			}
		},
		src: {
			type: String,
			default() {
				return '/img/noImages.png'
			}
		}
	}
}
</script>
<style scoped>
.item {
	width: 356px;
	height: 95px;
	padding: 5px;
	padding-right: 25px;
}
.wrapper {
	position: relative;
	border-radius: 14px;
	height: 100%;
	background: rgba(255, 255, 255, 0.1);
	display: flex;
}
.img_wrapper {
	width: 44px;
	height: 44px;
}
.left {
	width: 60px;
	min-width: 60px;
	align-items: center;
	justify-content: center;
	display: flex;
	height: 100%;
}
.right {
	flex-grow: 1;
}
.desc {
	line-height: 18px;
}
.title {
	line-height: 12px;
}
</style>
