<template>
	<div class="root">
		<div class="left">
			<div class="thumbnail_wrapper">
				<AImg :attributes="imgSettings.DC" src="/img/gape_card.png" />
			</div>
		</div>
		<div class="center">
			<div>
				<AText tag="h1" :attributes="titleSettings.DC">Luxor Gold</AText>
				<AText tag="div" :attributes="subTitleSettings.DC">Playson</AText>
				<AText tag="div" :attributes="sectionTitleSettings.DC">{{ t('GAME_AVAILABLE_CASINOS') }}</AText>
				<div class="casino_wrapper">
					<div class="item" style="background: #D21037">
						<ALink href="/dev/casino/single">
							<AImg :attributes="itemImgSettings.DC" src="/img/slotokingLogo.png" />
						</ALink>
					</div>
					<div class="item" style="background: #D21037">
						<ALink href="/dev/casino/single">
							<AImg :attributes="itemImgSettings.DC" src="/img/slotokingLogo.png" />
						</ALink>
					</div>
					<div class="item" style="background: #D21037">
						<ALink href="/dev/casino/single">
							<AImg :attributes="itemImgSettings.DC" src="/img/slotokingLogo.png" />
						</ALink>
					</div>
					<div class="item" style="background: #D21037">
						<ALink href="/dev/casino/single">
							<AImg :attributes="itemImgSettings.DC" src="/img/slotokingLogo.png" />
						</ALink>
					</div>
					<div class="item" style="background: #D21037">
						<ALink href="/dev/casino/single">
							<AImg :attributes="itemImgSettings.DC" src="/img/slotokingLogo.png" />
						</ALink>
					</div>
					<div class="item" style="background: #D21037">
						<ALink href="/dev/casino/single">
							<AImg :attributes="itemImgSettings.DC" src="/img/slotokingLogo.png" />
						</ALink>
					</div>
					<div class="item" style="background: #D21037">
						<ALink href="/dev/casino/single">
							<AImg :attributes="itemImgSettings.DC" src="/img/slotokingLogo.png" />
						</ALink>
					</div>
				</div>
				<div class="action_wrapper">
					<div class="action_item">
						<AButton :attributes="btnSettings.DC">{{ t('GO_TO') }}</AButton>
					</div>
					<div class="action_item">
						<AButton :attributes="btnDemoSettings.DC">{{ t('DEMO') }}</AButton>
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="characters_container">
				<GameCharacters type="rtp" title="RTP" value="96.46%" />
				<GameCharacters type="min_dep" :title="t('MIN_BET')" value="0.1" />
				<GameCharacters type="scheme" :title="t('SCHEMA')" value="3-3-4-4-4" />
				<GameCharacters type="line" :title="t('LINES')" value="2-3-0-4" />
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
export default {
	name: 'single-game-page',
	mixins: [translateMixin],
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
				DC: { class: 'title', color: 'cairo' },
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
