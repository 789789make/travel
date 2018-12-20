<template>
	<div class="weekend">
		<div class="weekend-title">周末去哪儿</div>
		<ul>
			<li class="weekend-item border-bottom" v-for='item in weekendList' :key='item.id'>
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
	margin-top: .1rem
	.weekend-title
		background: #ccc
		line-height: .6rem
		text-indent: .2rem
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
	export default{
    	name:'weekend',
    	data(){
    		return {
    			weekendList:[{
    				id:'0001',
    				imgUrl:'http://img1.qunarzz.com/sight/source/1812/9a/0133783cfb5ab4.jpg_r_640x214_62c2dc77.jpg',
    				title:'玩转峨眉山',
    				desc:'神秘又深厚造就了峨眉山“高山五岳，秀甲九州”'
    				},{
    				id:'0002',
    				imgUrl:'http://img1.qunarzz.com/sight/source/1505/44/5251f239d3456.jpg_r_640x214_88ab6a42.jpg',
    				title:'乐山必游',
    				desc:'坐竹排看乐山大佛，还有这么多好玩的地方'
    				},{
    				id:'0003',
    				imgUrl:'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
    				title:'远离烧烤模式',
    				desc:'与冰川里的水晶宫、“摄影家走廊”、来一场亲密的约会'
    				},{
    				id:'0004',
    				imgUrl:'http://img1.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg',
    				title:'摩崖石刻造像',
    				desc:'诸事不顺，来抱佛脚，中国最壮光大佛大盘点~来来来来来来来来来来来来来来'
    				}]
    		}
    	}
	}
</script>
