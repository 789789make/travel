<template>
	<div class="bfList">
		<ul>
			<li class="item">A</li>
			<li class="item">B</li>
			<li class="item">C</li>
			<li class="item">D</li>
			<li class="item">E</li>
			<li class="item">F</li>
			<li class="item">G</li>
			<li class="item">H</li>
		</ul>
	</div>
</template>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
.bfList
	position: absolute
	z-index: 999
	right:0
	top:50%
	transform:translate(0,-50%)
	.item
		text-align: center
		color: $bgColor
		line-height: .35rem
</style>

<script>
export default{
	name:'bfList'
}
</script>