<template>
	<div>
		<main class="game_page">
			<div class="container container_top_game">
				<SlotCard />
			</div>
			<div class="symbols">
				<div class="container">
					<AText tag="div" :attributes="symbolTitleSettings.DC">{{ t('SLOT_SYMBOLS') }}</AText>
					<SlotSymbols />
				</div>
			</div>
			<div class="screenshots">
				<div class="container">
					<AText tag="div" :attributes="symbolTitleSettings.DC">{{ t('SCREENSHOTS') }}</AText>
					<SlotScreenshots />
				</div>
			</div>
			<div class="container">
				<div class="faq_container">
					<Faq :value="faq" />
				</div>
			</div>
			<SlotPopUp v-if="false" />
		</main>
	</div>
</template>

<script>
import AText from '~/components/ui/atoms/text'
import SlotCard from '~/components/slot_card'
import SlotSymbols from '~/components/slot_symbols'
import SlotScreenshots from '~/components/slot_screenshots'
import Faq from '~/components/faq/app_faq'
import SlotPopUp from '~/components/slot_popup'
import translateMixin from '~/mixins/translate'

export default {
	name: 'game_single',
	mixins: [translateMixin],
	components: {
		AText,
		SlotCard,
		SlotSymbols,
		SlotScreenshots,
		Faq,
		SlotPopUp
	},
	layout: 'default',
	data: () => {
		return {
			symbolTitleSettings: {
				DC: { size: 'x-large', color: 'cairo', weight: 'bold', class: 'title' },
				TABLE: {},
				MOB: {}
			},
			faq: [
				{
					value_1: '✅ Чи приймає Slotoking гравців з України?',
					value_2:
						'Так, приймає. Slotoking є одним з перших українських казино. Окрім гравців їхньої України, тут можуть грати жителі Європи та Азії.'
				},
				{
					value_1: '🎗 Чи можна грати у Слотокінг на гривні?',
					value_2: 'Так, гривня є основною ігровою валютою.'
				},
				{
					value_1: '🧨 Як пройти реєстрацію на сайті Slotoking?',
					value_2:
						'На головній сторінці сайту натиснути кнопку "Реєстрація". Для реєстрації можна використовувати профілі у соціальних мережах, мобільний номер або електронну пошту.'
				},
				{
					value_1: '❇️ Який мінімальний депозит у казино Кінг?',
					value_2: 'Мінімальний депозит – 50 гривень.'
				},
				{
					value_1: '🏆 Яка мінімальна сума виведення коштів у Slotoking?',
					value_2: 'Мінімальна сума для виведення – 50 гривень.'
				},
				{
					value_1: '⭐ Чи є бонусна програма в Слотокінг?',
					value_2: 'Є вітальний пакет, а також фріспіни за реєстрацію в онлайн казино.'
				},
				{
					value_1: '💯 Які платіжні методи є в Slotoking?',
					value_2:
						'Казино Кінг приймає депозити за допомогою платіжних карток, банківських переказів та інших електронних валют. Детальнішу інформацію можна знайти на сторінці "Методи оплати".'
				}
			]
		}
	}
}
</script>
<style scoped>
.game_page {
	background: url('/img/short_bg.png') top center var(--colombo);
	background-repeat: no-repeat;
	padding-top: 165px;
}
.container_top_game {
	padding-bottom: 80px;
}
.symbols {
	background: var(--cucuta);
	padding-top: 50px;
	padding-bottom: 60px;
}
.screenshots {
	padding-top: 50px;
	padding-bottom: 60px;
}
.title {
	margin-bottom: 24px;
}
</style>
