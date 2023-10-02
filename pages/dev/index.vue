<template>
	<div>
		<header />
		<footer>Footer!</footer>
	</div>
</template>

<script>
    import header from '~/components/header'
    
export default {
	name: 'dev-main-page',
	layout: 'dev'
    components: {header}
}
</script>
