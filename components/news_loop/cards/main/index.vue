<template>
	<article class="item">
		<div class="wrapper">
			<div class="top">
				<div class="img_wrapper">
					<ALink :href="link">
						<AImg :attributes="imgSettings.DC" :src="src" />
					</ALink>
				</div>
			</div>
			<div class="center">
				<ALink :link="link" :attributes="titleLinkSettings.DC">
					{{ title }}
				</ALink>
				<AText tag="div" :attributes="dateTextSettings.DC">{{ date }}</AText>
				<AText tag="div" :attributes="descTextSettings.DC">{{ desc }}</AText>
			</div>
			<div class="bottom">
				<LinkWithArrow :link="link" :attributes="linkSettings.DC">
					Читати далі
				</LinkWithArrow>
			</div>
		</div>
	</article>
</template>
<script>
import AImg from '~/components/ui/atoms/img/'
import AText from '~/components/ui/atoms/text'
import ALink from '~/components/ui/atoms/links'
import LinkWithArrow from '~/components/ui/atoms/links/link_with_arrow'
export default {
	name: 'news_main_card',
	components: { AImg, AText, ALink, LinkWithArrow },
	data: () => {
		return {
			imgSettings: {
				DC: { width: '276px', height: '160px', class: 'object_fit_cover border_radius_s' },
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
			},
			linkSettings: {
				DC: { size: 'medium', color: 'calgary', weight: 'semi-bold', decoration: 'none' },
				TABLET: {},
				MOB: {}
			},
			titleLinkSettings: {
				DC: { size: 'medium', color: 'cairo', weight: 'semi-bold', decoration: 'none' },
				TABLET: {},
				MOB: {}
			},
			dateTextSettings: {
				DC: { size: 'small', color: 'cairo', weight: 'regular', class: 'date' },
				TABLET: {},
				MOB: {}
			},
			descTextSetting: {
				DC: { size: 'small', color: 'cairo', weight: 'light', class: 'desc' },
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
		date: {
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
	width: 280px;
	height: 400px;
	background: rgba(255, 255, 255, 0.1);
	padding: var(--xs);
	border-radius: var(--m);
}
.img_wrapper {
	width: 100%;
	height: 160px;
}
.bottom {
	display: flex;
}
.center {
	padding: var(--m) var(--s);
	height: 190px;
}
.desc {
	font-size: 10px;
	margin-top: var(--xs);
}
.date {
	font-size: 10px;
	margin-top: var(--xs);
}
.bottom {
	padding: 0 var(--s);
}
</style>
