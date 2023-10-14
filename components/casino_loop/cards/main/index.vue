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
				<div class="right_right">
					<AText tag="div" :attributes="advantagesTextSettings.DC">Famous progressive jackpots</AText>
					<AText tag="div" :attributes="advantagesTextSettings.DC">Live Dealer games</AText>
					<AText tag="div" :attributes="advantagesTextSettings.DC">40+ software providers</AText>
					<div class="providers">
						<div class="providers_icon"></div>
						<div class="providers_loop">
							<ALink href="/provider/link" :attributes="providerLinkSettings.DC">
								<AImg :attributes="providerSettings.DC" src="/img/provider_item.png" />
							</ALink>
							<ALink href="/provider/link" :attributes="providerLinkSettings.DC">
								<AImg :attributes="providerSettings.DC" src="/img/provider_item.png" />
							</ALink>
							<ALink href="/provider/link" :attributes="providerLinkSettings.DC">
								<AImg :attributes="providerSettings.DC" src="/img/provider_item.png" />
							</ALink>
							<ALink href="/provider/link" :attributes="providerLinkSettings.DC">
								<AImg :attributes="providerSettings.DC" src="/img/provider_item.png" />
							</ALink>
						</div>
						<div class="providers_total">
							<AText tag="span" :attributes="totalTextSettings.DC">+ 20</AText>
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
</style>
