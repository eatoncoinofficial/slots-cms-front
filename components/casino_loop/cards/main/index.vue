<template>
	<article class="item" :style="`background: ${bg}`">
		<div class="wrapper">
			<div class="left">
				<div class="img_wrapper">
					<ALink :href="link">
						<AImg :attributes="imgSettings.DC" :src="src" />
					</ALink>
				</div>
			</div>
			<div class="right">
				<div class="right_left">
					<ALink :href="link" :attributes="titleLinkSettings.DC">
						{{ title }}
					</ALink>
					<AText tag="div" :attributes="bonusNameSettings.DC">{{ bonus_name }}</AText>
					<AText tag="div" :attributes="bonusValueSettings.DC">{{ bonus_value }}</AText>
					<AText tag="div" :attributes="bonusDescSettings.DC">{{ min_dep }} &middot; {{ wager }}</AText>
					<div class="action_wrapper">
						<div class="btn_wrapper">
							<AButton :attributes="btnSettings.DC">Перейти</AButton>
						</div>
						<ALink :href="link" :attributes="readMoreLinkSettings.DC"
							><AImg :attributes="searchSettings.DC" src="/img/search.png" />
						</ALink>
					</div>
				</div>
				<div class="right_right"></div>
				<!--
				<ALink :link="link" :attributes="titleLinkSettings.DC">
					{{ title }}
				</ALink>
				<AText tag="div" :attributes="dateTextSettings.DC">{{ date }}</AText>
				<AText tag="div" :attributes="descTextSettings.DC">{{ desc }}</AText>
                -->
			</div>
		</div>
	</article>
</template>
<script>
import AImg from '~/components/ui/atoms/img/'
import AText from '~/components/ui/atoms/text'
import ALink from '~/components/ui/atoms/links'
import AButton from '~/components/ui/atoms/buttons'
export default {
	name: 'casino_main_card',
	components: { AImg, AText, ALink, AButton },
	data: () => {
		return {
			imgSettings: {
				DC: { width: '210px', height: '92px', class: 'object_fit_cover' },
				TABLET: {},
				MOB: {}
			},
			searchSettings: {
				DC: { width: '20px', height: '20px' },
				TABLET: {},
				MOB: {}
			},
			titleLinkSettings: {
				DC: { color: 'cairo', size: 'large', weight: 'bold', decoration: 'none' },
				TABLET: {},
				MOB: {}
			},
			bonusNameSettings: {
				DC: { color: 'cairo', size: 'small', weight: 'regular', class: 'bonus_name' },
				TABLET: {},
				MOB: {}
			},
			bonusValueSettings: {
				DC: { color: 'calgary', size: 'large', weight: 'bold', class: 'bonus_value' },
				TABLET: {},
				MOB: {}
			},
			bonusDescSettings: {
				DC: { color: 'cairo', size: 'small', weight: 'regular' },
				TABLET: {},
				MOB: {}
			},
			btnSettings: {
				DC: { bg: 'calgary', color: 'cochin', borderRadius: 's', weight: 'semi-bold' },
				TABLET: {},
				MOB: {}
			},
			readMoreLinkSettings: {
				DC: { bg: 'calgary', class: 'read_more' },
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
		},
		bonus_name: {
			type: String,
			default() {
				return 'Вітальний пакет'
			}
		},
		bonus_value: {
			type: String,
			default() {
				return '125 000 ₴ + 500 FS'
			}
		},
		bg: {
			type: String,
			default() {
				return '#D21037'
			}
		},
		min_dep: {
			type: String,
			default() {
				return 'Min. deposit: $30'
			}
		},
		wager: {
			type: String,
			default() {
				return 'Wagering: 40x'
			}
		}
	}
}
</script>
<style scoped>
.item {
	width: 820px;
	height: 206px;
	padding: var(--xs);
	border-radius: var(--m);
}
.img_wrapper {
	width: 210px;
	height: 92px;
}
.desc {
	font-size: 10px;
	margin-top: var(--xs);
}
.date {
	font-size: 10px;
	margin-top: var(--xs);
}
.wrapper {
	display: flex;
	height: 100%;
}
.left {
	width: 210px;
	min-width: 210px;
	display: flex;
	height: 100%;
	align-items: center;
}
.right {
	display: flex;
	flex-grow: 1;
	background: rgba(16, 13, 36, 0.7);
	border-radius: var(--m);
	padding: var(--m);
}
.bonus_name {
	margin-top: var(--s);
}
.btn_wrapper {
	width: 206px;
	height: 40px;
}
.action_wrapper {
	display: flex;
	margin-top: var(--m);
}
.read_more {
	display: flex;
	width: 40px;
	height: 40px;
	background: var(--cleveland);
	border-radius: var(--s);
	margin-left: var(--s);
	align-items: center;
	justify-content: center;
}
</style>
