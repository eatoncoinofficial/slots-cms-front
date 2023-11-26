<template>
	<div class="casino_details">
		<div class="row">
			<div class="left">
				<AText :attributes="textProvidersSettings.DC">{{ t('VENDORS') }}</AText>
			</div>
			<div class="right">
				<ALink
					v-for="(item, index) in vendors"
					:href="item.permalink"
					:attributes="textProviderItemSettings.DC"
					:key="index"
				>
					<AImg :attributes="imgSettings.DC" :src="item.icon" /> {{ item.title }}
				</ALink>
			</div>
		</div>
		<div class="row">
			<div class="left">
				<AText :attributes="textDepositMethodsSettings.DC">{{ t('DEPOSIT_METHODS') }}</AText>
			</div>
			<div class="right">
				<AText :attributes="textPayoutSettings.DC" v-for="(item, index) in payments" :key="index">{{
					item.title
				}}</AText>
			</div>
		</div>
		<div class="row">
			<div class="left">
				<AText :attributes="textWithoutMethodsSettings.DC">{{ t('PAYMENTS_OPTIONS') }}</AText>
			</div>
			<div class="right">
				<AText :attributes="textPayoutSettings.DC" v-for="(item, index) in payments" :key="index">{{
					item.title
				}}</AText>
			</div>
		</div>
		<div class="row">
			<div class="left">
				<AText :attributes="textGameCurrencySettings.DC">{{ t('GAME_CURRENCY') }}</AText>
			</div>
			<div class="right">
				<AText :attributes="textItemSettings.DC" v-for="(item, index) in currencies" :key="index">{{
					item.title
				}}</AText>
			</div>
		</div>
		<div class="row">
			<div class="left">
				<AText :attributes="textLangSettings.DC">{{ t('LANG') }}</AText>
			</div>
			<div class="right">
				<AText :attributes="textItemSettings.DC" v-for="(item, index) in languages" :key="index">{{
					item.title
				}}</AText>
			</div>
		</div>
	</div>
</template>
<script>
import AText from '~/components/ui/atoms/text'
import ALink from '~/components/ui/atoms/links'
import AImg from '~/components/ui/atoms/img'
import translateMixin from '~/mixins/translate'
export default {
	name: 'casino_detail',
	components: { AText, ALink, AImg },
	mixins: [translateMixin],
	props: {
		vendors: {
			type: Array,
			default() {
				return []
			}
		},
		payments: {
			type: Array,
			default() {
				return []
			}
		},
		currencies: {
			type: Array,
			default() {
				return []
			}
		},
		languages: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data() {
		return {
			textProvidersSettings: {
				DC: { color: 'cairo', size: 'small', weight: 'medium', class: 'provider' },
				TABLE: {},
				MOB: {}
			},
			textDepositMethodsSettings: {
				DC: { color: 'cairo', size: 'small', weight: 'medium', class: 'deposit_methods' },
				TABLE: {},
				MOB: {}
			},
			textWithoutMethodsSettings: {
				DC: { color: 'cairo', size: 'small', weight: 'medium', class: 'without_methods' },
				TABLE: {},
				MOB: {}
			},
			textGameCurrencySettings: {
				DC: { color: 'cairo', size: 'small', weight: 'medium', class: 'game_currency' },
				TABLE: {},
				MOB: {}
			},
			textLangSettings: {
				DC: { color: 'cairo', size: 'small', weight: 'medium', class: 'lang' },
				TABLE: {},
				MOB: {}
			},
			imgSettings: {
				DC: { width: '26px', height: '26px', class: 'logo' },
				TABLE: {},
				MOB: {}
			},
			textProviderItemSettings: {
				DC: {
					class: 'item_provider',
					color: 'cairo',
					size: 'small',
					weight: 'regular',
					decoration: 'none'
				},
				TABLE: {},
				MOB: {}
			},
			textPayoutSettings: {
				DC: {
					class: 'item_payout',
					color: 'cairo',
					weight: 'regular'
				},
				TABLE: {},
				MOB: {}
			},
			textItemSettings: {
				DC: {
					class: 'item',
					color: 'cairo',
					weight: 'regular'
				},
				TABLE: {},
				MOB: {}
			}
		}
	}
}
</script>

<style scoped>
.row {
	display: flex;
	padding-bottom: 15px;
	padding-top: 20px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.left {
	width: 200px;
	min-width: 200px;
	padding-right: 10px;
}
.right {
	flex-grow: 1;
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
}
.provider,
.deposit_methods,
.without_methods,
.game_currency,
.lang {
	padding-left: 25px;
	position: relative;
}
.provider::before,
.deposit_methods::before,
.without_methods::before,
.game_currency::before,
.lang::before {
	content: '';
	width: 20px;
	height: 20px;
	position: absolute;
	top: 50%;
	left: 0px;
	transform: translateY(-50%);
	background: url('/img/providers.png') no-repeat;
}
.deposit_methods::before {
	background: url('/img/deposit_methods.png') no-repeat;
}
.without_methods::before {
	background: url('/img/without.png') no-repeat;
}
.game_currency::before {
	background: url('/img/game_currency.png') no-repeat;
}
.lang::before {
	background: url('/img/lang.png') no-repeat;
}
.item_provider {
	display: flex;
	align-items: center;
	padding: 5px 15px;
	border-radius: var(--s);
	background: rgba(255, 255, 255, 0.1);
	white-space: nowrap;
	font-size: 10px;
}
.logo {
	display: block;
	margin-right: 5px;
}
.item_payout {
	font-size: 10px;
	display: inline-flex;
	padding: 8px 10px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 10px;
}
.item {
	font-size: 10px;
	display: inline-flex;
	padding: 8px 10px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.06);
}
@media (max-width: 767px) {
	.row {
		flex-wrap: wrap;
	}
	.left {
		width: 100%;
		margin-bottom: 20px;
	}
	.right {
		width: 100%;
	}
}
</style>
