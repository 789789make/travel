<template>
	<div class="bfList">
		<ul>
			<li class="item" v-for='(item,index) in bflist'>{{index}}</li>
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
	name:'bfList',
	props:['bflist']
}
</script>