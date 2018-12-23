<template>
	<div class="recommend">
		<div class="recommend-title">热销推荐</div>
		<ul>
			<router-link 
			:to="'/detail/'+item.id"
			tag='li' 
			class="recommend-item border-bottom" 
			v-for='item in recommend' 
			:key='item.id'
			>
				<div class="item">
				<img class="item-img" :src="item.imgUrl" alt="">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-total">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<style lang='stylus' scoped>
@import '~style/varibles.styl'
.recommend
	.recommend-title
		background: #eee
		line-height: .8rem
		text-indent: .2rem
		font-size: .2rem
		font-weight: bold
	.recommend-item
		padding-bottom: .05rem
		display: flex
		height: 1.9rem
		.item-img
			height: 1.6rem
			width: 3.0rem
			padding: .2rem .2rem
		.item-info
			possition: relative
			flex:1
			padding: .0rem .2rem
			min-width: 0
			.item-title
				line-height:.8rem
				font-size: .25rem
				font-weight: bold
				$ellipsis()
			.item-desc
				$ellipsis()
				line-height: .4rem
				color: rgba(192,192,192,1)
			.item-total
				position:absolute
				bottom: .17rem
				font-size: .05rem
				background: #ff9300
				padding: .02rem .1rem
				border-radius: .1rem
				color: white

</style>
<script>
	export default{
    	name:'recommend',
    	props:
    	{
    		recommend: Array
    	}
	}
</script>
