<template>
	<div class="slick_bonus">
        <div class="bonus">
            <AImg src="/img/Gift.svg" :attributes="imgSettings" />
        </div>
        <AButton :attributes="btnSettings" title="Get bonus" @onClick="refActivate(refLinks)">
            {{ t('GET_BONUS') }}
        </AButton>
	</div>
</template>

<script>
import translateMixin from '~/mixins/translate'
import refMixin from '~/mixins/ref'
import components from '~/mixins/components'
export default {
	name: 'app_slick_bonus',
	props: {
        refLinks: {
            type: Array,
            default() {
                return []
            }
        },
    },
    data: () => {
		return {
			imgSettings: {
				width: '35px',
				height: '35px',
			},
            btnSettings: {
				bg: 'calgary',
				color: 'cairo',
				borderRadius: 's',
				weight: 'semi-bold',
				text_transform: 'uppercase',
                class: 'action_btn'
			},
		}
	},
	mixins: [refMixin, translateMixin, components],
}
</script>

<style>
.slick_bonus {
    position: fixed;
    width: 60px;
    height: 50px;
    bottom: 20px;
    right: 0px;
}
.bonus {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 60px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background: var(--calgary);
    border-radius: var(--s);
    transition: 0.7s;
    z-index: 1;
}
.slick_bonus:hover .bonus {
    left: -70px;
}  
.slick_bonus:hover .action_btn {
    left: -90px;
    transition: 0.7s;
}
.action_btn {
    white-space: nowrap;
    position: absolute;
    top: 0;
    left: 60px;
    width: 150px!important;
    z-index: 2;
}
@media (min-width: 320px) and (max-width: 767px) {
	
}
</style>