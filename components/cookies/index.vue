<template>
    <section class="cookies" :class="startIsHide ? 'fadeOut': ''" :data-position="position" v-if="device !== 'MOB' && isShow" id="cookies">
        <div class="container">
            <div class="content">
                <div class="left" v-html="t('COOKIES')"></div>
                <div class="right">
                    <AButton :attributes="btnSettings" @onClick="close" :title="t('CONFIRM')">{{
						t('CONFIRM')
					}}</AButton>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'Cookies',
    mixins: [components],
	data: () => {
		return {
			isShow: false,
            startIsHide: false,
            btnSettings: {
                class: 'btnConfirm'
            },
            COOKIES_POP_UP_KEY: 'cookiesPopUp'
		}
	},
    props: {
        position: {
            type: String,
            default: ''
        }
    },
    methods: {
        close() {
            this.startIsHide = true
            setTimeout(()=>{
                this.isShow = false
                localStorage.setItem(this.COOKIES_POP_UP_KEY, 'true')
            }, 1000)
        }
    },
    mounted() {
        const cookiesExist = localStorage.getItem(this.COOKIES_POP_UP_KEY)
        if(!cookiesExist) this.isShow = true
    }
}
</script>
<style scoped>
.cookies {
    position: fixed;
    width: 100%;
    bottom: 20px;
    left: 0;
    z-index: 3;
    align-items: center;
}
.content {
    background: linear-gradient(to right, #1B1831E5, #534A97E5);
    border-radius: var(--m);
    font-size: 14px;
    color: var(--cairo);
    padding: 20px;
    font-weight: 300;
    text-align: center;
    display: flex;
    justify-content: space-between;
    gap: 15px;
}
.right {
    display: flex;
    align-items: center;
}
.btnConfirm {
    background: var(--calgary);
    color: var(--cucuta);
    width: 150px;
    min-width: 150px;
    max-height: 40px;
    height: 40px;
    border-radius: var(--xs);
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}
.fadeOut {
    animation: fadeOut 1s forwards;
}
@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}
@keyframes fadeOut {
  from {opacity: 1;}
  to {opacity: 0;}
}
[data-position="middle"] {
  bottom: 100px;
}
</style>
