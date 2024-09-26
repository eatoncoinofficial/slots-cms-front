<template>
    <div class="gradient" :class="modifier"></div>
</template>
<script>
export default {
	name: 'gradient',
    props: {
        modifier: {
            type: String,
            default: () => ''
        }
    }
}
</script>
<style scoped>
.gradient {
	position: absolute;
	height: 115px;
	width: 100%;
	top: 0;
	left: 0;
	background: linear-gradient(90deg, rgba(51,35,149,1) 0%, rgba(104,66,255,1) 100%);
}
.large {
    height: 390px;
}
</style>