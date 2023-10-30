<template>
	<div>
		<main class="bonuses_page">
			<div class="container">
				<AText tag="div" :attributes="titleSettings.DC">{{ data.body.h1 }}</AText>
			</div>
			<div class="container">
				<div class="bonus_category_container">
					<div class="bonus_category_item">
						<BonusCategory />
					</div>
					<div class="bonus_category_item">
						<BonusCategory />
					</div>
					<div class="bonus_category_item">
						<BonusCategory />
					</div>
					<div class="bonus_category_item">
						<BonusCategory />
					</div>
					<div class="bonus_category_item">
						<BonusCategory />
					</div>
					<div class="bonus_category_item">
						<BonusCategory />
					</div>
				</div>
			</div>
			<div class="container content_container">
				<MainContent :value="data.body.content" />
			</div>
			<div class="container">
				<div class="faq_container">
					<Faq :value="faq" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import AText from '~/components/ui/atoms/text'
import Faq from '~/components/faq/app_faq'
import BonusCategory from '~/components/bonus_category'
import MainContent from '~/components/content'
import DAL_Page from '~/DAL/static_pages'
import head from '~/mixins/head'
import helper from '~/helpers/helpers'

export default {
	name: 'bonuses-page',
	mixins: [head],
	components: {
		AText,
		Faq,
		BonusCategory,
		MainContent
	},
	layout: 'default',
	data: () => {
		return {
			titleSettings: {
				DC: { color: 'cairo', size: 'x-large', weight: 'bold', transform: 'uppercase', class: 'title' },
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
	},
	async asyncData({ store, route }) {
		const request = {
			url: 'bonuses'
		}
		const response = await DAL_Page.getData(request)
		const data = helper.headDataMixin(response.data, route)
		return { data }
	}
}
</script>
<style scoped>
.bonuses_page {
	background: url('/img/short_bg.png') top center var(--colombo);
	background-repeat: no-repeat;
	padding-top: 165px;
}
.news_container {
	display: flex;
	justify-content: space-between;
	margin-top: var(--l);
}
.title {
	margin-bottom: var(--m);
}
.bonus_category_container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.bonus_category_item {
	width: 32%;
}
</style>
