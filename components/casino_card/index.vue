<template>
	<div class="casino_card" :style="`background: ${bg}`">
		<div class="wrapper">
			<div class="left">
				<div class="rating">
					<AImg :attributes="starSettings.DC" src="/img/goldStar.svg" />
					<AText tag="span" :attributes="textSettings.DC">{{ rating / 10 }} </AText>
					<AText tag="span" :attributes="thinTextSettings.DC">/ 10</AText>
				</div>
				<div class="img_wrapper">
					<AImg :attributes="imgSettings.DC" :src="src" />
				</div>
			</div>
			<div class="right">
				<AText tag="div" :attributes="labelSettings.DC" v-if="label" :class="label">{{ label }}</AText>
				<div>
					<AText tag="div" :attributes="titleSettings.DC">{{ title }}</AText>
					<AText tag="div" :attributes="bonusNameSettings.DC">{{ t('WELCOME_PACKAGE') }}</AText>
					<AText tag="div" :attributes="bonusValueSettings.DC">{{ bonus_value }}</AText>
					<div class="action_wrapper">
						<div class="btn_wrapper">
							<AButton :attributes="btnSettings.DC" @onClick="refActivate(refLinks)">{{ t('GO_TO') }}</AButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import AImg from '~/components/ui/atoms/img/'
import AText from '~/components/ui/atoms/text'
import AButton from '~/components/ui/atoms/buttons'
import translateMixin from '~/mixins/translate'
import ref from '~/mixins/ref'
export default {
	name: 'casino_card',
	mixins: [translateMixin, ref],
	components: { AImg, AText, AButton },
	data() {
		return {
			imgSettings: {
				DC: { width: '210px', height: '92px', class: 'object_fit_cover' },
				TABLET: {},
				MOB: {}
			},
			titleSettings: {
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
				DC: { color: 'calgary', size: 'x-large', weight: 'bold', class: 'bonus_value' },
				TABLET: {},
				MOB: {}
			},
			btnSettings: {
				DC: { bg: 'calgary', color: 'cochin', borderRadius: 's', weight: 'semi-bold' },
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
			labelSettings: {
				DC: { color: 'cairo', size: 'small', bold: 'regular', text_transform: 'uppercase', class: 'label' },
				TABLET: {},
				MOB: {}
			}
		}
	},
	props: {
		src: {
			type: String,
			default() {
				return '/img/slotokingLogo.png'
			}
		},
		bonus_value: {
			type: String,
			default() {
				return '125 000 ₴ + 500 FS'
			}
		},
		title: {
			type: String,
			default() {
				return ''
			}
		},
		label: {
			type: String,
			default() {
				return ''
			}
		},
		bg: {
			type: String,
			default() {
				return '#D21037'
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
.casino_card {
	width: 100%;
	height: 206px;
	padding: var(--xs);
	border-radius: var(--m);
}
.img_wrapper {
	width: 210px;
	height: 92px;
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
	position: relative;
}
.wrapper {
	display: flex;
	height: 100%;
}
.bonus_name {
	margin-top: var(--s);
}
.bonus_value {
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
	border-radius: var(--s);
}
.rating_value {
	transform: translateY(1px);
}
.rating_total_value {
	font-size: 10px;
	transform: translateY(1px);
}
.label {
	background: rgba(255, 0, 92, 1);
	padding: 4px 8px;
	position: absolute;
	right: 6px;
	top: 6px;
	border-radius: 8px;
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
