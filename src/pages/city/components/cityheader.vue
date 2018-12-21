<template>
	<div class="cityHeader">
		<router-link to='/'>
		<span class="iconfont city-back">&#xe624;</span>
		</router-link>
		城市选择
	</div>
</template>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
.cityHeader
	position: relative
	height: .86rem
	background: $bgColor
	line-height: .86rem
	color: white
	text-align: center
	font-size: .35rem
	a
		color: white
	.city-back
		position:absolute
		left: .15rem
</style>

<script>
	export default{
		name: 'cityheader'
	}
</script>