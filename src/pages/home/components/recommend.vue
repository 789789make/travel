<template>
	<div class="recommend">
		<div class="recommend-title">热销推荐</div>
		<ul>
			<li class="recommend-item border-bottom" v-for='item in recommendList'>
				<img class="item-img" :src="item.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-total">查看详情</button>
				</div>
				
			</li>
		</ul>
	</div>
</template>
<style lang='stylus' sope>
@import '~style/varibles.styl'
.recommend
	margin-top: .1rem
	.recommend-title
		background: #ccc
		line-height: .8rem
		text-indent: .2rem
	.recommend-item
		display: flex
		height: 1.9rem
		.item-img
			height: 1.6rem
			width: 2.8rem
			padding: .2rem
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
				bottom: .1rem
				font-size: .05rem
				background: #ff9300
				padding: .02rem .1rem
				border-radius: .1rem
				color: white

</style>
<script>
	export default{
    	name:'recommend',
    	data(){
    		return {
    			recommendList:[{
    				id:'0001',
    				imgUrl:'http://img1.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_200x200_c0ef018f.jpg',
    				title:'峨眉山',
    				desc:'中国四大佛教名山之一'
    				},{
    				id:'0002',
    				imgUrl:'http://img1.qunarzz.com/sight/p0/1502/e0/e055cb2c79da8f33.water.jpg_200x200_93193a93.jpg',
    				title:'药王谷',
    				desc:''
    				},{
    				id:'0003',
    				imgUrl:'http://img1.qunarzz.com/sight/p0/1610/a3/a33deca6343fe55ba3.water.jpg_200x200_e0dd90e7.jpg',
    				title:'红珠山森林温泉',
    				desc:'树林之间点缀的19个温泉池极具特色'
    				},{
    				id:'0004',
    				imgUrl:'http://img1.qunarzz.com/sight/p0/1512/f8/f8009e80c6f8c7f990.water.jpg_200x200_6f8e0c8f.jpg',
    				title:'金顶',
    				desc:'领略峨眉山四大奇观'
    				}]
    		}
    	}
	}
</script>
