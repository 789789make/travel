<template>
	<div class="header">
		<div class="header-return" >
			<span class="iconfont icon-back">&#xe624;</span>
		</div>
		<div class="header-fixed">
			<span class="iconfont icon-back">&#xe624;</span>
			峨眉山
		</div>
	</div>
</template>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
.header
	position:fixed
	top: 0
	left: 0
	right: 0
	.header-fixed
		position: absolute
		top: 0
		line-height: .88rem
		width: 100%
		background: $bgColor
		text-align: center
		color: white
		font-size: .35rem
		.icon-back
			position: absolute
			left: .15rem
			font-size: .4rem
	.header-return
		.icon-back
			width: .7rem
			height: .7rem
			font-weight: bold
			font-size: .35rem
			color: white
			display: inline-block
			background: rgba( 0, 0, 0, .6)
			text-align: center
			line-height: .7rem
			border-radius: 1rem
			margin-top: .05rem
			margin-left : .09rem
</style>

<script>
export default{
	name: 'detail-header'
}
</script>