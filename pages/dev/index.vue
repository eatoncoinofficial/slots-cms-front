<template>
	<div>
		<header>Header!</header>
		<footer>Footer!</footer>
		<Slider />
	</div>
</template>

<script>
import Slider from '~/components/slider'
export default {
	name: 'dev-main-page',
	components: { Slider },
	layout: 'dev'
}
</script>
