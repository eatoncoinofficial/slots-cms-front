<template>
	<div class="game_popup">
		<div class="wrapper">
			<div class="title_wrapper">
				<AText :attributes="titleSettings.DC">{{ title }}</AText>
				<div class="btn_action">
					<AButton :attributes="btnFullSettings.DC"></AButton>
					<AButton :attributes="btnCloseSettings.DC"></AButton>
				</div>
			</div>
			<iframe class="game-popup__iframe" :src="src" frameborder="0"></iframe>
		</div>
	</div>
</template>
<script>
import AText from '~/components/ui/atoms/text'
import AButton from '~/components/ui/atoms/buttons'

export default {
	name: 'game_popup',
	components: {
		AText,
		AButton
	},
	data: () => {
		return {
			titleSettings: {
				DC: { color: 'cairo', size: 'medium', weight: 'bold' },
				TABLE: {},
				MOB: {}
			},
			btnFullSettings: {
				DC: { class: 'btn_full' },
				TABLE: {},
				MOB: {}
			},
			btnCloseSettings: {
				DC: { class: 'btn_close' },
				TABLE: {},
				MOB: {}
			}
		}
	},
	props: {
		src: {
			type: String,
			default() {
				return ''
			}
		},
		title: {
			type: String,
			default() {
				return ''
			}
		}
	}
}
</script>
<style scoped>
.game_popup {
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(16, 13, 36, 0.7);
	z-index: 5;
	display: flex;
	justify-content: center;
	padding-top: 5%;
}
.wrapper {
	width: 968px;
	height: 594px;
	max-width: 100%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	overflow: hidden;
}
.title_wrapper {
	background: var(--cucuta);
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
}
.game-popup__iframe {
	width: 100%;
	height: 100%;
}
.btn_full {
	width: 18px;
	height: 18px;
	background: url('/img/full_screen.png');
}
.btn_close {
	width: 18px;
	height: 18px;
	background: url('/img/close.png');
}
.btn_action {
	display: flex;
	gap: 20px;
	align-items: center;
}
</style>
