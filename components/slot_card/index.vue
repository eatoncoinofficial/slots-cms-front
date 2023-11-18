<template>
	<div class="root">
		<div class="left">
			<div class="thumbnail_wrapper">
				<AImg :attributes="imgSettings.DC" :src="src" />
			</div>
		</div>
		<div class="center">
			<div>
				<AText tag="div" :attributes="titleSettings.DC">{{ title }}</AText>
				<AText tag="div" :attributes="subTitleSettings.DC">{{ vendor_title }}</AText>
				<AText tag="div" :attributes="sectionTitleSettings.DC">{{ t('GAME_AVAILABLE_CASINOS') }}</AText>
				<div class="casino_wrapper">
					<div class="item" v-for="(item, index) in casinos" :key="index" :style="`background: ${item.color}`">
						<ALink :href="item.permalink">
							<AImg :attributes="itemImgSettings.DC" :src="item.thumbnail" />
						</ALink>
					</div>
				</div>
				<div class="action_wrapper">
					<div class="action_item">
						<AButton :attributes="btnSettings.DC" @onClick="refActivate(refLinks)">{{ t('GO_TO') }}</AButton>
					</div>
					<div class="action_item">
						<AButton :attributes="btnDemoSettings.DC" v-if="demo">{{ t('DEMO') }}</AButton>
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="characters_container">
				<GameCharacters type="rtp" title="RTP" :value="rtp" />
				<GameCharacters type="min_dep" :title="t('MIN_BET')" :value="min_bid" />
				<GameCharacters type="scheme" :title="t('SCHEMA')" :value="scheme" />
				<GameCharacters type="line" :title="t('LINES')" :value="line" />
			</div>
		</div>
	</div>
</template>
<script>
import AText from '~/components/ui/atoms/text'
import AImg from '~/components/ui/atoms/img'
import ALink from '~/components/ui/atoms/links'
import AButton from '~/components/ui/atoms/buttons'
import GameCharacters from '~/components/game_characters'
import translateMixin from '~/mixins/translate'
import ref from '~/mixins/ref'
export default {
	name: 'single-game-page',
	mixins: [translateMixin, ref],
	components: {
		AText,
		AImg,
		ALink,
		AButton,
		GameCharacters
	},
	data: () => {
		return {
			imgSettings: {
				DC: {
					width: '300px',
					height: '325px',
					class: 'object_fit_cover thumbnail'
				},
				TABLE: {},
				MOB: {}
			},
			titleSettings: {
				DC: { class: 'title', color: 'cairo', weight: 'bold' },
				TABLE: {},
				MOB: {}
			},
			subTitleSettings: {
				DC: { class: 'sub_title', color: 'cairo', size: 'medium' },
				TABLE: {},
				MOB: {}
			},
			sectionTitleSettings: {
				DC: { class: 'section_title', color: 'cairo', size: 'small' },
				TABLE: {},
				MOB: {}
			},
			itemImgSettings: {
				DC: { width: '68px', height: '50px' },
				TABLE: {},
				MOB: {}
			},
			btnSettings: {
				DC: { bg: 'calgary', color: 'cochin', borderRadius: 's', weight: 'semi-bold' },
				TABLE: {},
				MOB: {}
			},
			btnDemoSettings: {
				DC: { bg: 'calgary', color: 'cairo', borderRadius: 's', weight: 'semi-bold', class: 'demo_btn' },
				TABLE: {},
				MOB: {}
			}
		}
	},
	props: {
		title: {
			type: String,
			default() {
				return ''
			}
		},
		src: {
			type: String,
			default() {
				return '/img/slotokingLogo.png'
			}
		},
		rtp: {
			type: String,
			default() {
				return ''
			}
		},
		min_bid: {
			type: String,
			default() {
				return ''
			}
		},
		scheme: {
			type: String,
			default() {
				return ''
			}
		},
		line: {
			type: String,
			default() {
				return ''
			}
		},
		demo: {
			type: Boolean,
			default() {
				return false
			}
		},
		vendor_title: {
			type: String,
			default() {
				return ''
			}
		},
		casinos: {
			type: Array,
			default() {
				return []
			}
		}
	}
}
</script>
<style scoped>
.thumbnail_wrapper {
	width: 300px;
	height: 325px;
	overflow: hidden;
}
.center {
	display: flex;
	align-items: center;
	min-width: 512px;
	max-width: 512px;
}
.left {
	max-width: 300px;
}
.root {
	display: flex;
	gap: 33px;
	background: var(--cucuta);
	border-radius: 20px;
	border: 1px solid rgba(255, 255, 255, 0.15);
}
.title {
	font-size: var(--l);
}
.section_title {
	margin-top: 24px;
}
.casino_wrapper {
	display: flex;
	gap: var(--xs);
	margin-top: 12px;
}
.item {
	border-radius: var(--s);
	width: 68px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.action_item {
	height: 40px;
	flex-grow: 1;
}
.action_wrapper {
	display: flex;
	gap: 12px;
	margin-top: 50px;
}
.demo_btn {
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.16);
}
.right {
	flex-grow: 1;
	display: flex;
	align-items: center;
	width: 100%;
}
.characters_container {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: var(--m);
}
</style>
