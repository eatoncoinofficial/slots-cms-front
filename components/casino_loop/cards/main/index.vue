<template>
	<article class="item" :style="`background: ${bg}`">
		<div class="wrapper">
			<div class="left">
				<div class="label" v-if="label" :class="label">
					{{ label }}
				</div>
				<div class="rating">
					<AImg :attributes="starSettings.DC" src="/img/goldStar.svg" />
					<AText tag="span" :attributes="textSettings.DC">{{ rating / 10 }}</AText>
					<AText tag="span" :attributes="thinTextSettings.DC">/10</AText>
				</div>
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
					<AText tag="div" :attributes="bonusNameSettings.DC">{{ t('WELCOME_PACKAGE') }}</AText>
					<AText tag="div" :attributes="bonusValueSettings.DC">{{ bonus_value }}</AText>
					<AText tag="div" :attributes="bonusDescSettings.DC"
						>Min. deposit: {{ min_dep }} &middot; Wagering: {{ wager }}</AText
					>
					<div class="action_wrapper">
						<div class="btn_wrapper">
							<AButton :attributes="btnSettings.DC">{{ t('GO_TO') }}</AButton>
						</div>
						<ALink :href="link" :attributes="readMoreLinkSettings.DC"
							><AImg :attributes="searchSettings.DC" src="/img/search.png" />
						</ALink>
					</div>
				</div>
				<div class="right_right">
					<div class="advantages_wrapper">
						<AText tag="div" :attributes="advantagesTextSettings.DC" v-for="(item, index) in advantages" :key="index">{{
							item
						}}</AText>
					</div>
					<div class="providers">
						<div class="providers_icon"></div>
						<div class="providers_loop">
							<ALink
								v-for="(item, index) in vendors.slice(0, 4)"
								:href="item.permalink"
								:attributes="providerLinkSettings.DC"
								:key="index"
							>
								<AImg :attributes="providerSettings.DC" :src="item.thumbnail" />
							</ALink>
						</div>
						<div class="providers_total">
							<AText tag="span" :attributes="totalTextSettings.DC">+ {{ vendors.length }}</AText>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>
<script>
import AImg from '~/components/ui/atoms/img/'
import AText from '~/components/ui/atoms/text'
import ALink from '~/components/ui/atoms/links'
import AButton from '~/components/ui/atoms/buttons'
import translateMixin from '~/mixins/translate'
export default {
	name: 'casino_main_card',
	mixins: [translateMixin],
	components: { AImg, AText, ALink, AButton },
	data: () => {
		return {
			imgSettings: {
				DC: { width: '210px', height: '92px', class: 'object_fit_cover' },
				TABLET: {},
				MOB: {}
			},
			starSettings: {
				DC: { width: '14px', height: '14px', class: ' m_r_xs' },
				TABLET: {},
				MOB: {}
			},
			textSettings: {
				DC: { color: 'cairo', size: 'small', bold: 'semi-bold', class: 'rating_value' },
				TABLET: {},
				MOB: {}
			},
			thinTextSettings: {
				DC: { color: 'cordoba', size: 'small', bold: 'thin', class: 'rating_total_value' },
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
			},
			advantagesTextSettings: {
				DC: { color: 'cairo', size: 'small', class: 'advantages' },
				TABLET: {},
				MOB: {}
			},
			totalTextSettings: {
				DC: { color: 'cairo' },
				TABLET: {},
				MOB: {}
			},
			providerLinkSettings: {
				DC: { class: 'provider_link' },
				TABLET: {},
				MOB: {}
			},
			providerSettings: {
				DC: { class: 'provider_img', width: '54px', height: '34px' },
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
				return '$30'
			}
		},
		wager: {
			type: String,
			default() {
				return '40x'
			}
		},
		label: {
			type: String,
			default() {
				return ''
			}
		},
		advantages: {
			type: Array,
			default() {
				return []
			}
		},
		vendors: {
			type: Array,
			default() {
				return []
			}
		},
		rating: {
			type: Number,
			default() {
				return 0
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
	position: relative;
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
.right_right {
	flex-grow: 1;
	padding-left: var(--m);
}
.advantages {
	margin-bottom: 20px;
	position: relative;
	padding-left: 25px;
}
.advantages::before {
	content: '';
	width: 18px;
	height: 18px;
	background: url('/img/success.svg');
	background-position: center;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	left: 0;
}
.providers {
	display: flex;
	justify-content: space-between;
}
.providers_icon {
	height: 34px;
	width: 18px;
	background: url('/img/providers.png');
	background-position: center;
	background-repeat: no-repeat;
}
.providers_total {
	height: 34px;
	width: 34px;
	background: var(--cleveland);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--s);
	border: 1px solid rgba(94, 64, 181, 0.45);
	font-size: 10px;
}
.providers_loop {
	flex-grow: 1;
	display: flex;
	justify-content: space-around;
}
.provider_link {
	display: inline-block;
	width: 54px;
	height: 34px;
}
.provider_img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: var(--s);
}
.advantages_wrapper {
	height: 123px;
	overflow: hidden;
	padding-bottom: 5px;
}
.rating {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 2;
	background: var(--cardiff);
	width: 75px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--l);
}
.rating_value {
	transform: translateY(1px);
}
.rating_total_value {
	font-size: 10px;
	transform: translateY(1px);
}
.label {
	width: 63px;
	height: 30px;
	border-radius: var(--l);
	position: absolute;
	left: 0;
	top: 0;
	font-size: 10px;
	text-transform: uppercase;
	font-weight: 500;
	color: var(--cairo);
	display: flex;
	align-items: center;
	justify-content: center;
}
.label.trusted {
	background: rgba(0, 184, 107, 1);
}
.label.new {
	background: rgba(0, 163, 255, 1);
}
.label.popular {
	background: rgba(255, 0, 92, 1);
}
</style>
