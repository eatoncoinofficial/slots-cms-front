<template>
	<div class="item_container">
		<div class="item_wrapper">
			<SlotScreenshotsItem />
		</div>
		<div class="item_wrapper">
			<SlotScreenshotsItem />
		</div>
		<div class="item_wrapper">
			<SlotScreenshotsItem />
		</div>
		<div class="item_wrapper">
			<SlotScreenshotsItem />
		</div>
	</div>
</template>

<script>
import SlotScreenshotsItem from '~/components/slot_screenshots/item'
export default {
	name: 'game_symbols',
	components: { SlotScreenshotsItem },
	data() {
		return {
			currentValue: []
		}
	}
}
</script>

<style scoped>
.item_container {
	display: flex;
	flex-wrap: wrap;
	gap: 32px 3%;
}
.item_wrapper {
	min-width: 22%;
	max-width: 22%;
}
</style>
