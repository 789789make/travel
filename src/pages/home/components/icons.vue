<template>
	<div class="icons">
		<div class="icon">
			<div class="iconImg">
				<img class="iconImg-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
			</div>
			<p class="icon-info">message</p>
		</div>
	</div>
</template>

<style lang='stylus' scpoed>
.icons
	overflow:hidden
	height:0
	padding-bottom: 50%
	width: 100%
	background: red
	text-align: center
	.icon
		overflow:hidden
		position: relative
		height: 0
		float: left
		width:25%
		padding-bottom: 25%
		background: green
		color: white
		.iconImg
			position: absolute
			top: 0
			left: 0
			bottom: .35rem
			right : 0
			background: blue
			box-sizing: border-box
			padding: 0 .1rem
			.iconImg-content
				display:block
				margin:0 auto
				height:100%
		.icon-info
			position: absolute 
			bottom: 0
			left: 0
			right: 0
			line-height: .35rem


</style>

<script >
	export default{
		name:'headerIcon'
	}
</script>