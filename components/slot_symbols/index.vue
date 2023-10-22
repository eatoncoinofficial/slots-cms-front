<template>
	<div class="item_container">
		<div class="item_wrapper">
			<SlotSymbolItem />
		</div>
		<div class="item_wrapper">
			<SlotSymbolItem />
		</div>
		<div class="item_wrapper">
			<SlotSymbolItem />
		</div>
		<div class="item_wrapper">
			<SlotSymbolItem />
		</div>
		<div class="item_wrapper">
			<SlotSymbolItem />
		</div>
	</div>
</template>

<script>
import SlotSymbolItem from '~/components/slot_symbols/item'
export default {
	name: 'game_symbols',
	components: { SlotSymbolItem },
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
	gap: 32px 5%;
}
.item_wrapper {
	min-width: 30%;
}
</style>
