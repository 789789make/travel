<template>
	<div class="detailList">
		<div 
		class="item"
		v-for = '(item, index) of categoryList'
		:key= 'item.id'
		>
		<div class="item-title border-bottom">
			<span class="item-title-icon"></span>
			 {{item.title}}
		</div>
		<div v-if='item.children' class="childList">
			<detail-list :categoryList='item.children'></detail-list>
		</div>
		</div>
	</div>
</template>

<style lang='stylus' scoped>
.item-title
	line-height: .7rem
	font-size: .28rem
	font-weight: bold
	.item-title-icon
		display: inline-block
		position: relative
		left: .3rem
		top: .1rem
		width: .36rem
		height: .36rem
		background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
		margin-right: .4rem
		background-size: .4rem 3rem
.childList
	padding:0 .5rem
	.item-title
		font-size: .20rem
		line-height: .6rem
		font-weight: 510
		.item-title-icon
			background: none
</style>

<script>
export default{
	name:'detailList',
	props:{
		categoryList : Array
	},
}
</script>