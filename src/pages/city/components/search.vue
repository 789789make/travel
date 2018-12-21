<template>
	<div class="search">
		<input class="search-input" type="text" placeholder="输入城市名或拼音">
	</div>
</template>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
.search
	height: .72rem
	background:  $bgColor
	margin-top: -.1rem
	padding: .1rem
	.search-input
		box-sizing: border-box
		width: 100%
		padding:0 .2rem
		border-radius: .1rem
		display: block
		margin: .05rem auto
		heigth: .62rem
		line-height: .62rem
		text-align: center
</style>

<script>
	export default{
		name:'search'
	}
</script>