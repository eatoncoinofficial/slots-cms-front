<template>
	<div class="screen_popup" :class="fullScreen ? 'p-0' : ''">
		<div class="wrapper" :class="fullScreen ? 'full_screen' : ''">
			<div class="title_wrapper" :class="fullScreen ? 'full_screen' : ''">
				<AText :attributes="titleSettings">{{ title }}</AText>
				<div class="btn_action">
					<AButton :attributes="btnFullSettings" @onClick="changeSize"></AButton>
					<AButton :attributes="btnCloseSettings" @onClick="onClickDemoClose"></AButton>
				</div>
			</div>
            <AImg :attributes="{ ...imgSettings, alt: `${title} logo` }" :src="src" />
		</div>
	</div>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'scree_popup',
	mixins: [components],
	data: () => {
		return {
			titleSettings: {
				color: 'cairo', size: 'medium', weight: 'bold'
			},
			btnFullSettings: {
				class: 'btn_full'
			},
			btnCloseSettings: {
				class: 'btn_close'
			},
            imgSettings: {
                class: 'screen-popup_img object_fit_cover'
            },
			fullScreen: false
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
	},
	methods: {
		onClickDemoClose() {
			this.$emit('onClickScreenClose')
		},
		changeSize() {
			this.fullScreen = this.fullScreen ? false : true
		}
	}
}
</script>
<style scoped>
.screen_popup {
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
.screen_popup.p-0 {
	padding: 0px;
}
.wrapper {
	width: 968px;
	height: 594px;
	max-width: 100%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	overflow: hidden;
}
.wrapper.full_screen {
	width: 100%;
	height: 100%;
}
.title_wrapper {
	background: var(--cucuta);
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
}
.title_wrapper.full_screen {
	padding-right: 40px;
}
.screen-popup_img {
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
