<template>
	<div class="casino_details">
		<div class="row">
			<div class="left">
				<AText :attributes="textProvidersSettings">{{ t('VENDORS') }}</AText>
			</div>
			<div class="right">
				<ALink
					v-for="(item, index) in currentVendors"
					:href="item.permalink"
					:attributes="textProviderItemSettings"
					:key="index"
					:title="`Goes to ${item.title} page`"
				>
					<AImg :attributes="{ ...imgSettings, alt: `${item.title} Logo` }" :src="item.icon" /> {{ item.title }}
				</ALink>
				<div class="show_more_wrapper" v-if="vendors.length > numberItems">
					<button class="show_more" @click="filterVendors" :class="{active: vendorsIsShow}"> 
						<img src="/img/arrowGreen.svg" width="18px" height="18px" class="arrow" >
					</button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="left">
				<AText :attributes="textDepositMethodsSettings">{{ t('DEPOSIT_METHODS') }}</AText>
			</div>
			<div class="right">
				<AText :attributes="textPayoutSettings" v-for="(item, index) in currentDeposit" :key="index">
					<AImg :attributes="{ ...imgSettings, alt: `${item.title} Logo` }" :src="item.thumbnail" /> {{ item.title }}
				</AText>
				<div class="show_more_wrapper" v-if="deposit.length > numberItems">
					<button class="show_more" @click="filterDeposit" :class="{active: depositIsShow}"> 
						<img src="/img/arrowGreen.svg" width="18px" height="18px" class="arrow" >
					</button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="left">
				<AText :attributes="textWithoutMethodsSettings">{{ t('PAYMENTS_OPTIONS') }}</AText>
			</div>
			<div class="right">
				<AText :attributes="textPayoutSettings" v-for="(item, index) in currentPayment" :key="index">
					<AImg :attributes="{ ...imgSettings, alt: `${item.title} Logo` }" :src="item.thumbnail" /> {{ item.title }}
				</AText>
				<div class="show_more_wrapper" v-if="payments.length > numberItems">
					<button class="show_more" @click="filterPayment" :class="{active: paymentIsShow}"> 
						<img src="/img/arrowGreen.svg" width="18px" height="18px" class="arrow" >
					</button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="left">
				<AText :attributes="textGameCurrencySettings">{{ t('GAME_CURRENCY') }}</AText>
			</div>
			<div class="right">
				<AText :attributes="textItemSettings" v-for="(item, index) in currentCurrencies" :key="index">
					<AImg :attributes="{ ...imgSettings, alt: `${item.title} Logo` }" :src="item.thumbnail" /> {{ item.title }}
				</AText>
				<div class="show_more_wrapper" v-if="currencies.length > numberItems">
					<button class="show_more" @click="filterCurrencies" :class="{active: currenciesIsShow}"> 
						<img src="/img/arrowGreen.svg" width="18px" height="18px" class="arrow" >
					</button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="left">
				<AText :attributes="textLangSettings">{{ t('LANG') }}</AText>
			</div>
			<div class="right">
				<AText :attributes="textItemSettings" v-for="(item, index) in currentLanguages" :key="index">
					<AImg :attributes="{ ...imgSettingsFlag, alt: `${item.title} Logo` }" :src="item.thumbnail" />
					{{ item.title }}
				</AText>
				<div class="show_more_wrapper" v-if="languages.length > numberItems">
					<button class="show_more" @click="filterLanguages" :class="{active: languagesIsShow}"> 
						<img src="/img/arrowGreen.svg" width="18px" height="18px" class="arrow" >
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'casino_detail',
	mixins: [components],
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
		deposit: {
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
				color: 'cairo',
				size: 'small',
				weight: 'medium',
				class: 'provider'
			},
			textDepositMethodsSettings: {
				color: 'cairo',
				size: 'small',
				weight: 'medium',
				class: 'deposit_methods'
			},
			textWithoutMethodsSettings: {
				color: 'cairo',
				size: 'small',
				weight: 'medium',
				class: 'without_methods'
			},
			textGameCurrencySettings: {
				color: 'cairo',
				size: 'small',
				weight: 'medium',
				class: 'game_currency'
			},
			textLangSettings: {
				color: 'cairo',
				size: 'small',
				weight: 'medium',
				class: 'lang'
			},
			imgSettings: {
				width: '26px',
				height: '26px',
				class: 'logo'
			},
			imgSettingsFlag: {
				width: '19px',
				height: '18px',
				class: 'flag_icon'
			},
			textProviderItemSettings: {
				class: 'item_provider',
				color: 'cairo',
				size: 'small',
				weight: 'regular',
				decoration: 'none'
			},
			textPayoutSettings: {
				class: 'item_payout',
				color: 'cairo',
				weight: 'regular'
			},
			textItemSettings: {
				class: 'item',
				color: 'cairo',
				weight: 'regular'
			},
			numberItems: 5,
			vendorsIsShow: false,
			depositIsShow: false,
			paymentIsShow: false,
			currenciesIsShow: false,
			languagesIsShow: false,
		}
	},
	methods: {
		filterVendors() {
			this.vendorsIsShow = !this.vendorsIsShow
		},
		filterDeposit() {
			this.depositIsShow = !this.depositIsShow
		},
		filterPayment() {
			this.paymentIsShow = !this.paymentIsShow
		},
		filterCurrencies() {
			this.currenciesIsShow =!this.currenciesIsShow
		},
		filterLanguages() {
			this.languagesIsShow =!this.languagesIsShow
		}
	},
	computed: {
		currentVendors() {
			return this.vendorsIsShow ? this.vendors : this.vendors.slice(0, this.numberItems)
		},
		currentDeposit() {
			return this.depositIsShow ? this.deposit : this.deposit.slice(0, this.numberItems)
		},
		currentPayment() {
			return this.paymentIsShow ? this.payments : this.payments.slice(0, this.numberItems)
		},
		currentCurrencies() {
			return this.currenciesIsShow ? this.currencies : this.currencies.slice(0, this.numberItems)
		},
		currentLanguages() {
			return this.languagesIsShow ? this.languages : this.languages.slice(0, this.numberItems)
		}
	}
}
</script>

<style scoped>
.flag_icon {
	margin-right: 5px;
	display: block;
}
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
	position: relative;
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
	padding: 5px 10px;
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
	display: flex;
	align-items: center;
	padding: 5px 10px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 10px;
}
.item {
	font-size: 10px;
	display: flex;
	align-items: center;
	padding: 5px 10px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.06);
}
.show_more {
	width: 30px;
	height: 30px;
	border-radius: var(--s);
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: rotate(90deg);
	cursor: pointer;
	transition: 0.7s;
	border: none;
}
.show_more.active {
	transform: rotate(-90deg);
}
.show_more_wrapper {
	padding: 5px 5px 0 5px;
	display: flex;
	justify-content: flex-end;
	width: 100%;
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
