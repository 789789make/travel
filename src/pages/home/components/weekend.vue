<template>
	<div class="weekend">
		<div class="weekend-title">周末去哪儿</div>
		<ul>
			<li class="weekend-item border-bottom" v-for='item in weekend' :key='item.id'>
				<div class="item-img">
				<img class="img-content" :src="item.imgUrl" alt="">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<style lang='stylus' scoped>
@import '~style/varibles.styl'
.weekend
	.weekend-title
		background: #eee
		line-height: .8rem
		text-indent: .2rem
		font-size: .2rem
		font-weight: bold
	.weekend-item
		.item-img
			overflow: hidden
			height: 0
			padding-bottom: 38%
			.img-content
				width: 100%
		.item-info
			padding: .10rem .2rem
			.item-title
				line-height: .48rem
				font-size: .28rem
				$ellipsis()
			.item-desc
				line-height: .6rem
				font-size: .24rem
				color: #616161
				$ellipsis()
</style>
<script>
	export default
	{
    	name:'weekend',
    	props:
    	{
    		weekend: Array
    	}
	}
</script>
